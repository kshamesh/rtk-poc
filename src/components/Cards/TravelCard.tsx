// components/cards/TravelCard.tsx
import React from "react";
import { useSelector } from "react-redux";

import type { RootState } from "../../store/store";

const CardD: React.FC = () => {
  const travelCard = useSelector(
    (state: RootState) => state.plan.plan?.travelCard
  );

  return (
    <div className="card-content">
      <h3>Travel Options</h3>
      <ul style={{ listStyle: "none", textAlign: "left" }}>
        {travelCard?.slice(0, 5).map((user) => {
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

export default CardD;
