import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateCardB } from "../features/cardB/cardBSlice";

function CardB() {
  const dispatch = useAppDispatch();
  const cardB = useAppSelector((s) => s.cardB);

  return (
    <div className="card-content">
      <h3>Card B</h3>
      <input
        value={cardB.name}
        onChange={(e) => dispatch(updateCardB({ name: e.target.value }))}
      />
      <button
        style={{ backgroundColor: "#fdd85d", width: "100%" }}
        onClick={() =>
          dispatch(updateCardB({ items: [...cardB.items, cardB.name] }))
        }
      >
        Add Item
      </button>
      <ul>
        {cardB.items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default CardB;
