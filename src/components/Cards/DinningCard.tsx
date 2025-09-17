// components/cards/TravelCard.tsx
import React, { useEffect } from "react";

import { useAppDispatch } from "../../store/hooks";
import { usePlanStatus } from "../../features/Plan/usePlanStatus";
import { getDinningOptions } from "../../features/api/diningApi";
import {
  mergeDinningCard,
  setMergeStatus,
} from "../../features/Plan/planSlice";

const DinningCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { plan } = usePlanStatus();

  useEffect(() => {
    if (!plan?.id) return;
    const loadOptions = async () => {
      dispatch(setMergeStatus({ card: "Dinning", status: "pending" }));
      const apiOptions = await getDinningOptions(plan.id);
      console.log("Fetched dinning options:", apiOptions);
      dispatch(mergeDinningCard(apiOptions.map((opt) => opt.options).flat()));
      dispatch(setMergeStatus({ card: "Dinning", status: "success" }));
    };
    loadOptions();
  }, [dispatch, plan?.id]);

  return (
    <div className="card-content">
      <h3>Dinning Options</h3>
      <ul style={{ listStyle: "none", textAlign: "left" }}>
        {plan?.dinningCard?.slice(0, 5).map((dinningOptions) => {
          return (
            <li key={dinningOptions} style={{ textAlign: "left" }}>
              <span>{dinningOptions}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DinningCard;
