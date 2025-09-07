import React from "react";
import { DashboardHeader } from "./DashboardHeader";
import { useAppDispatch } from "../../store/hooks";
import { saveDashboard } from "../../store/saveDashboard";
import LiveChanges from "./LiveChanges";
import CardC from "../Cards/CardC";
import { SideDrawer } from "../SideDrawer";
// import CardB from "../Cards/CardB";
import CardA from "../Cards/CardA";
import CardD from "../Cards/CardD";

export const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSave = () => {
    dispatch(saveDashboard());
  };

  return (
    <div>
      <DashboardHeader onSave={handleSave} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          padding: "16px",
        }}
      >
        {/* Add more cards as needed */}
        <div className="card">
          <CardA />
        </div>
        {/* <div className="card">
          <CardB />
        </div> */}
        <div className="card">
          <CardC />
        </div>
        <div className="card">
          <CardD />
        </div>
      </div>
      <LiveChanges />
      <SideDrawer />
    </div>
  );
};
