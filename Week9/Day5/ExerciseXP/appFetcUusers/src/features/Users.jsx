import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";
import "./Users.css";

const Users = () => {
  const { users, status, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") return <h2>Loading users...</h2>;
  if (status === "failed") return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            <p><strong>Address:</strong> {`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
