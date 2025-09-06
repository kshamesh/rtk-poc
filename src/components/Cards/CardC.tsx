import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateCardC } from "../../features/CardC/cardCSlice";

function CardC() {
  const dispatch = useAppDispatch();
  const cardC = useAppSelector((s) => s.cardC);

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
        I acknowledge the terms and conditions
      </label>
    </div>
  );
}

export default CardC;
