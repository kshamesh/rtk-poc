import React, { use, useEffect, useState } from "react";
import "./Dashboard.css";
import { useAppDispatch } from "../../store/hooks";
import { toggleSideDrawer } from "../../features/SideDrawer/sideDrawerSlice";
import { loadOrCreatePlan, setPlan } from "../../features/Plan/planSlice";
import type { Plan } from "../../features/Plan/Plan";
import { mockPlans } from "../../features/api/planApi";

interface DashboardHeaderProps {
  onSave: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onSave }) => {
  const dispatch = useAppDispatch();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState<string>("");

  // Fetch all plans from mockPlans (planApi)
  useEffect(() => {
    const allPlans: Plan[] = Object.values(mockPlans) || [];
    console.log("Fetched plans:", allPlans);
    console.log("Type of plans:", typeof allPlans);
    setPlans(allPlans);
  }, [dispatch]);

  useEffect(() => {
    const planId = "102"; // 🚩 102 is something returned from the API as the last modified plan
    setSelectedPlanId(planId);
    dispatch(loadOrCreatePlan(planId));
  }, [dispatch]);

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
    const planId = "102"; // 🚩 Hardcoded (only plan id 101,102,103 exist in local mock setup)
    dispatch(loadOrCreatePlan(planId));
  }, [dispatch]);

  return (
    <div className="dashboard-header">
      <h1>Dashboard</h1>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <select
          value={selectedPlanId}
          onChange={handlePlanChange}
          style={{ height: 32 }}
        >
          {plans?.map((plan) => (
            <option key={plan.productId} value={plan.productId}>
              {plan.name} ({plan.productId})
            </option>
          ))}
        </select>
        <div className="button-group">
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
