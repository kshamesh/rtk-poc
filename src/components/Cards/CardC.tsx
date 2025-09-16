import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateCardC } from "../../features/CardC/cardCSlice";
import { usePlanStatus } from "../../features/Plan/usePlanStatus";

function CardC() {
  const dispatch = useAppDispatch();
  const cardC = useAppSelector((s) => s.cardC);
  const { isNew, loading, plan } = usePlanStatus();

  return (
    <div className="card-content">
      <h3>Card C</h3>
      <textarea
        style={{ width: "100%" }}
        value={cardC.notes}
        onChange={(e) => dispatch(updateCardC({ notes: e.target.value }))}
      />
      <label>
        <input
          type="checkbox"
          checked={cardC.flag}
          onChange={(e) => dispatch(updateCardC({ flag: e.target.checked }))}
        />
        {/* show this text only after loading */}
        {loading ? (
          <span>Plan Loading...</span>
        ) : (
          <span>
            I acknowledge the terms and conditions given in{" "}
            {isNew ? "🆕 New Plan" : "📂 Existing Plan"} {<b>{plan?.name}</b>}
          </span>
        )}
      </label>
    </div>
  );
}

export default CardC;
