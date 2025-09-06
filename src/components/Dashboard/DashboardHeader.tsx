import React from "react";
import "./Dashboard.css";
import { useAppDispatch } from "../../store/hooks";
import { toggleSideDrawer } from "../../features/SideDrawer/sideDrawerSlice";

interface DashboardHeaderProps {
  onSave: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onSave }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="dashboard-header">
      <h1>Dashboard</h1>
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
  );
};
