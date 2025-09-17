// components/cards/TravelCard.tsx
import React, { useEffect } from "react";

import { useAppDispatch } from "../../store/hooks";
import { getTravelOptions } from "../../features/api/travelApi";
import { mergeTravelCard } from "../../features/Plan/planSlice";
import { usePlanStatus } from "../../features/Plan/usePlanStatus";

const TravelCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { plan } = usePlanStatus();

  useEffect(() => {
    if (!plan?.id) return;
    alert(plan.id);
    const loadOptions = async () => {
      const apiOptions = await getTravelOptions(plan.id);
      console.log("Fetched travel options:", apiOptions);
      dispatch(mergeTravelCard(apiOptions.map((opt) => opt.options).flat()));
    };
    loadOptions();
  }, [dispatch, plan?.id]);

  return (
    <div className="card-content">
      <h3>Travel Options</h3>
      <ul style={{ listStyle: "none", textAlign: "left" }}>
        {plan?.travelCard?.slice(0, 5).map((travelOptions) => {
          return (
            <li key={travelOptions} style={{ textAlign: "left" }}>
              <span>{travelOptions}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TravelCard;
