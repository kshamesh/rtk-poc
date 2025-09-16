import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateCardA, resetCardA } from "../../features/CardA/cardASlice";
import "./Cards.css";
import { usePlanStatus } from "../../features/Plan/usePlanStatus";

function CardA() {
  const dispatch = useAppDispatch();
  const cardA = useAppSelector((s) => s.cardA);

  const { plan, isExisting } = usePlanStatus();

  // -----------------------------
  // Hydrate CardA from Plan if existing
  // -----------------------------
  useEffect(() => {
    console.log("CardA: plan changed", plan);
    console.log("CardA: isExisting", isExisting);
    if (plan && isExisting && plan.cardA) {
      // Merge plan.cardA into current slice state
      dispatch(updateCardA({ ...cardA, ...plan.cardA }));
    } else {
      dispatch(resetCardA());
    }
    // We only want this to run once when plan loads
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plan, isExisting]);

  return (
    <div className="card-content">
      <h3>Card A</h3>
      <input
        value={cardA.title}
        onChange={(e) => dispatch(updateCardA({ title: e.target.value }))}
      />
      <input
        type="number"
        value={cardA.value}
        onChange={(e) =>
          dispatch(updateCardA({ value: Number(e.target.value) }))
        }
      />
    </div>
  );
}

export default CardA;
