// add simple card with heading and description
// no redux state interactions
import React, { useEffect } from "react";
// import cards css for consistent styling
import "../Cards/Cards.css";
import {
  selectCardStatus,
  selectMergeStatus,
} from "../../features/Plan/planSlice";
import { useAppSelector } from "../../store/hooks";
import type { CardKey } from "../../features/Plan/Plan";

export const ExternalCard: React.FC = () => {
  const mergedCards: CardKey[] = ["Dinning", "Travel"]; // just extend here
  const cards: CardKey[] = ["Card D"]; // cards to track status

  const mergedCardStatus = mergedCards.map((c) =>
    useAppSelector(selectMergeStatus(c))
  );

  const cardsStatus = cards.map((c) => useAppSelector(selectCardStatus(c)));

  useEffect(() => {
    console.log("Statuses changed:", mergedCardStatus);
    if (
      mergedCardStatus.length > 0 &&
      mergedCardStatus.every((s) => s === "success")
    ) {
      console.log(`Merge completed for: ${mergedCards.join(", ")}`);
      // add a flash background color for this card when it comes this if block
    }
  }, [mergedCardStatus, cardsStatus]);

  return (
    <div className="card">
      <h3>
        External Card{" "}
        {mergedCardStatus.every((s) => s === "success") ? "✅" : "⏳"}
      </h3>
      <p>
        This card gets notified as soon as the merging is completed in Travel
        card and Dinning card or Card D is ready.
      </p>
      {/* show status along with card name*/}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {/* Ready Status Column */}
        <div
          style={{
            flex: 1,
            padding: "0.2rem",
            backgroundColor: "#e3f5e4ff",
            borderRadius: "6px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h4 style={{ marginBottom: "0.5rem" }}>Ready Status</h4>
          <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
            {cards.map((c, idx) => (
              <li
                key={c}
                style={{
                  padding: "0.25rem 0",
                  color: cardsStatus[idx] === "success" ? "green" : "#999",
                  fontWeight:
                    cardsStatus[idx] === "success" ? "bold" : "normal",
                }}
              >
                {c}: {cardsStatus[idx] === "success" ? "✅" : "⏳"}
              </li>
            ))}
          </ul>
        </div>

        {/* Merge Status Column */}
        <div
          style={{
            flex: 1,
            padding: "0.2rem",
            backgroundColor: "#e3f5e4ff",
            borderRadius: "6px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h4 style={{ marginBottom: "0.5rem" }}>Merge Status</h4>
          <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
            {mergedCards.map((c, idx) => (
              <li
                key={c}
                style={{
                  padding: "0.25rem 0",
                  color: mergedCardStatus[idx] === "success" ? "green" : "#999",
                  fontWeight:
                    mergedCardStatus[idx] === "success" ? "bold" : "normal",
                }}
              >
                {c}: {mergedCardStatus[idx] === "success" ? "✅" : "⏳"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
