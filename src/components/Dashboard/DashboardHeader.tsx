import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useAppDispatch } from "../../store/hooks";
import { toggleSideDrawer } from "../../features/SideDrawer/sideDrawerSlice";
import { loadOrCreatePlan, setPlan } from "../../features/Plan/planSlice";
import type { Plan } from "../../features/Plan/Plan";
import { mockPlans } from "../../features/api/planApi";

interface DashboardHeaderProps {
  onSave: () => void;
}

export type PlanMode = "new" | "existing";

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onSave }) => {
  const dispatch = useAppDispatch();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState<string>("");
  const [planMode, setPlanMode] = useState<PlanMode>("existing");

  // Fetch all plans from mockPlans (planApi)
  useEffect(() => {
    if (planMode === "existing") {
      const allPlans: Plan[] = Object.values(mockPlans) || [];
      console.log("Fetched plans:", allPlans);
      console.log("Type of plans:", typeof allPlans);
      setPlans(allPlans);
    } else {
      setPlans([]);
    }
  }, [dispatch, planMode]);

  useEffect(() => {
    const planId = "102"; // 🚩 102 is something returned from the API as the last modified plan
    planMode === "existing" ? setSelectedPlanId(planId) : setSelectedPlanId("");
    dispatch(loadOrCreatePlan({ planId, planMode }));
  }, [dispatch, planMode]);

  // When dropdown changes, update selected plan in Redux
  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pid = e.target.value;
    setSelectedPlanId(pid);
    const plan = plans.find((p) => p.productId === pid);
    if (plan) {
      dispatch(setPlan(plan));
    }
  };

  useEffect(() => {
    const planId = "102"; // 🚩 This is the last created plan
    dispatch(loadOrCreatePlan({ planId, planMode }));
  }, [dispatch]);

  return (
    <div className="dashboard-header">
      <h1>Dashboard</h1>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {plans?.length > 0 && planMode === "existing" && (
          /* Plan selection dropdown
          add some good style to selection dropdown */
          <select
            value={selectedPlanId}
            onChange={handlePlanChange}
            style={{
              height: 32,
              borderRadius: 4,
              border: "1px solid #383109ff",
              padding: "4px 8px",
              fontSize: 14,
            }}
          >
            {plans?.map((plan) => (
              <option key={plan.productId} value={plan.productId}>
                {plan.name} ({plan.productId})
              </option>
            ))}
          </select>
        )}

        <div className="button-group">
          {/* Toggle between 'new' and 'existing' plan mode using input type as button only */}
          <button
            className="button-switch"
            onClick={() =>
              setPlanMode((prev) => (prev === "existing" ? "new" : "existing"))
            }
          >
            {planMode === "existing"
              ? "Switch to New Plan"
              : "Switch to Existing Plan"}
          </button>

          <button
            className="button-edit"
            onClick={() => dispatch(toggleSideDrawer())}
          >
            📝 Edit
          </button>
          <button className="button-save" onClick={onSave}>
            💾 Save Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
