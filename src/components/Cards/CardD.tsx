// components/cards/CardC.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiSlice } from "../../features/api/apiSlice";
import type { RootState } from "../../store/store";
import { toggleUserSelection } from "../../features/CardD/userSelectionSlice";
import { setCardsStatus } from "../../features/Plan/planSlice";

const CardD: React.FC = () => {
  const {
    isSuccess,
    isError,
    isLoading,
    data: users = [],
  } = apiSlice.endpoints.getUsers.useQuery(undefined);
  const selectedMap = useSelector(
    (state: RootState) => state.userSelection.selectedMap
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCardsStatus({ card: "Card D", status: "success" }));
    } else if (isError) {
      dispatch(setCardsStatus({ card: "Card D", status: "error" }));
    } else if (isLoading) {
      dispatch(setCardsStatus({ card: "Card D", status: "pending" }));
    }
  }, [isSuccess, isError, isLoading, dispatch]);

  return (
    <div className="card-content">
      <h3>Card D (Users)</h3>
      <ul style={{ listStyle: "none", textAlign: "left" }}>
        {users.slice(0, 5).map((user) => {
          const isSelected = selectedMap[user.id] ?? false;
          return (
            <li key={user.id} style={{ textAlign: "left" }}>
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => dispatch(toggleUserSelection(user.id))}
              />
              <span>
                {user.id}#{user.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardD;
