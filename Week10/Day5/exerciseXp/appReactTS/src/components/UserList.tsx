import React, { useEffect, useState } from "react";
import { User } from "./User";

const UserList = (): React.ReactElement => {
    const [users, setUsers] = useState<User[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data: User[] = await response.json();
                setUsers(data);
            } catch (err: unknown) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>UserName:</strong> {user.username}</p>
                        <p><strong>Company:</strong> {user.company.name}</p>
                        <p><strong>Address:</strong> {user.address.street},{user.address.suite}, {user.address.city} - {user.address.zipcode} </p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
