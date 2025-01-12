import { ReactElement, useState } from "react";
import { User } from "../../types/types";
import GenericList from "../../utils/GenericList";

const UserApp = (): ReactElement => {
  // Use useState hook to manage the list of books
  const [users, setUsers] = useState<User[]>([
    { id: 1, name:"John", email:"jjj@gmail.com" },
    { id: 2, name:"Mary", email:"mmm@gmail.com" },
  ]);

  // 4. Function to add a new book
  const addUser = () => {
    const newUser: User = {
      id: Date.now(),
      name: `New User ${Date.now()}`,
      email: "sdfgh@gmail.com",
    };
    setUsers([...users, newUser]);
  };

  // Render the list of users using the List component
  return (
    <div>
      <h2>Users' List</h2>
      <GenericList<User>
        items={users}
        renderItem={(user: User) => (
          <span>
            {user.email} by {user.name}
          </span>
        )}
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
};
export default UserApp;