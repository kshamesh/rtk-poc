import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { saveDashboard } from "../../store/dashboardThunks";
import CardA from "../Cards/CardA";
import CardB from "../Cards/CardB";
import CardC from "../Cards/CardC";
import LiveChanges from "./LiveChanges";
import "./Dashboard.css";
import "../Cards/Cards.css";
import CardD from "../Cards/CardD";

function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();

  const handleSave = () => {
    dispatch(saveDashboard());
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-banner">
        <h1 className="dashboard-title">Dashboard Demo</h1>
        <button className="dashboard-button" onClick={handleSave}>
          💾 Save Dashboard
        </button>
      </div>
      <div className="dashboard-cards">
        <div className="card">
          <CardA />
        </div>
        <div className="card">
          <CardB />
        </div>
        <div className="card">
          <CardC />
        </div>
        <div className="card">
          <CardD />
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <LiveChanges />
      </div>
    </div>
  );
}

export default Dashboard;
