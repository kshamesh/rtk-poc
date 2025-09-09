import React from "react";
import type { RootState } from "../../store/store";
import { useAppSelector } from "../../store/hooks";

const preStyle: React.CSSProperties = {
  textAlign: "left",
  backgroundColor: "#222",
  color: "#9effa1",
  padding: "1rem",
  borderRadius: "6px",
  fontSize: "0.85rem",
  overflowX: "auto",
};

export const CardE: React.FC = () => {
  const plan = useAppSelector((state: RootState) => state.plan.plan);

  if (!plan) {
    return (
      <div>
        <h3>Plan</h3>
        <p>No plan loaded</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Plan</h3>
      <pre style={preStyle}>{JSON.stringify(plan, null, 2)}</pre>
    </div>
  );
};
