// add simple card with heading and description
// no redux state interactions
import React, { useEffect } from "react";
// import cards css for consistent styling
import "../Cards/Cards.css";
import { selectMergeStatus } from "../../features/Plan/planSlice";
import { useAppSelector } from "../../store/hooks";
import type { CardKey } from "../../features/Plan/Plan";

export const ExternalCard: React.FC = () => {
  const watchedCards: CardKey[] = ["dinning", "travel"]; // just extend here
  const statuses = watchedCards.map((c) =>
    useAppSelector(selectMergeStatus(c))
  );

  useEffect(() => {
    console.log("Statuses changed:", statuses);
    if (statuses.length > 0 && statuses.every((s) => s === "success")) {
      console.log(`Merge completed for: ${watchedCards.join(", ")}`);
    }
  }, [statuses, watchedCards]);

  return (
    <div className="card">
      <h3>External Card</h3>
      <p>
        This card gets notified as soon as the merging is completed in Travel
        card and Dinning card
      </p>
    </div>
  );
};
