import React from "react";
import "./Dashboard/Dashboard.css";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeSideDrawer } from "../features/SideDrawer/sideDrawerSlice";
import CardB from "./Cards/CardB";

export const SideDrawer: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.sideDrawer.isOpen);

  return (
    <div className={`side-drawer ${isOpen ? "open" : ""}`}>
      <div className="side-drawer-header">
        <h2>Edit Dashboard</h2>
        <button onClick={() => dispatch(closeSideDrawer())}>&times;</button>
      </div>
      <div className="card-content">
        <CardB />
      </div>
    </div>
  );
};
