import React from "react";
import { usePlanStatus } from "../../features/Plan/usePlanStatus";

const preStyle: React.CSSProperties = {
  textAlign: "left",
  backgroundColor: "#222",
  color: "#9effa1",
  padding: "1rem",
  borderRadius: "6px",
  fontSize: "0.85rem",
  height: "200px",
  overflowY: "scroll",
};

export const CardE: React.FC = () => {
  const { loading, plan } = usePlanStatus();

  if (loading) {
    return (
      <div>
        <h3>Current Plan</h3>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Current Plan</h3>
      <pre style={preStyle}>{JSON.stringify(plan, null, 2)}</pre>
    </div>
  );
};
