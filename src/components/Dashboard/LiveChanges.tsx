import React from "react";
import { useSelector } from "react-redux";
import { type RootState } from "../../store/store";
import { selectSelectedUserIds } from "../../selectors/cardDSelectors";

const cardStyle: React.CSSProperties = {
  border: "1px solid #4caf50",
  borderRadius: "8px",
  padding: "1rem",
  backgroundColor: "#f6fff6",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  marginTop: "1rem",
  width: "100%",
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#4caf50",
  color: "white",
  padding: "0.5rem 1rem",
  borderRadius: "6px 6px 0 0",
  margin: "-1rem -1rem 1rem -1rem",
  fontSize: "1.1rem",
};

const preStyle: React.CSSProperties = {
  textAlign: "left",
  backgroundColor: "#222",
  color: "#9effa1",
  padding: "1rem",
  borderRadius: "6px",
  fontSize: "0.85rem",
  overflowX: "auto",
};

const LiveChanges: React.FC = () => {
  const state = useSelector((state: RootState) => state);
  const cardA = useSelector((state: RootState) => state.cardA);
  const cardB = useSelector((state: RootState) => state.cardB);
  const cardC = useSelector((state: RootState) => state.cardC);
  const selectedUserIds = selectSelectedUserIds(state);

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>📊 Dashboard Live State</div>
      <pre style={preStyle}>
        {JSON.stringify({ cardA, cardB, cardC, selectedUserIds }, null, 2)}
      </pre>
    </div>
  );
};

export default LiveChanges;
