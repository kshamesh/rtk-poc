import React from "react";
import { useGetUsersQuery } from "../features/apiSlice";

const CardD: React.FC = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();

  return (
    <div className="card-content">
      <h3>Card D (Users)</h3>
      {isLoading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>Error loading users</p>}
      <ul style={{ paddingLeft: "1.2rem", textAlign: "left" }}>
        {users?.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong> ({user.name})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardD;
