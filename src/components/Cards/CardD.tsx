// components/cards/CardC.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiSlice } from "../../features/api/apiSlice";
import type { RootState } from "../../store/store";
import { toggleUserSelection } from "../../features/CardD/userSelectionSlice";

const CardC: React.FC = () => {
  const { data: users = [] } = apiSlice.endpoints.getUsers.useQuery(undefined);
  const selectedMap = useSelector(
    (state: RootState) => state.userSelection.selectedMap
  );
  const dispatch = useDispatch();

  return (
    <div className="card-content">
      <h2>Card D (Users)</h2>
      <ul style={{ listStyle: "none", textAlign: "left", marginLeft: "-30px" }}>
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

export default CardC;
