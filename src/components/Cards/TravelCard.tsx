// components/cards/TravelCard.tsx
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getTravelOptions } from "../../features/api/travelApi";
import { mergeTravelCard } from "../../features/Plan/planSlice";

const TravelCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const travelOptions = useAppSelector((s) => s.plan.plan?.travelCard ?? []);

  useEffect(() => {
    const loadOptions = async () => {
      const apiOptions = await getTravelOptions();
      dispatch(mergeTravelCard(apiOptions));
    };
    loadOptions();
  }, [dispatch, travelOptions.length]);

  return (
    <div className="card-content">
      <h3>Travel Options</h3>
      <ul style={{ listStyle: "none", textAlign: "left" }}>
        {travelOptions?.slice(0, 5).map((user) => {
          return (
            <li key={user} style={{ textAlign: "left" }}>
              <span>{user}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TravelCard;
