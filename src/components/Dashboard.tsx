import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { saveDashboard } from "../store/dashboardThunks";
import CardA from "./cardA";
import CardB from "./cardB";
import CardC from "./cardC";
import ResultCard from "./resultCard";
import "./Dashboard.css";
import "./Cards.css";

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
          Save Dashboard
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
      </div>
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <ResultCard />
      </div>
    </div>
  );
}

export default Dashboard;
