import React from "react";

interface UserCard{
    name?: string,
    age?: number,
    role?: string,
}


const UserCard = ({
    name = "Unknown",
    age = 0,
    role = "Guest",
}: UserCard): React.ReactElement => {
    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Role: {role}</p>
        </div>
    );
};

export default UserCard;
