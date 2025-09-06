import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateCardA } from "../features/cardA/cardASlice";

function CardA() {
  const dispatch = useAppDispatch();
  const cardA = useAppSelector((s) => s.cardA);

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
