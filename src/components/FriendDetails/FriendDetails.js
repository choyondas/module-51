import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    return (
        <div style={{ border: "2px solid red" }}>
            <h3>detail coming soon no: {friendId}</h3>
            <h1>name: {friend.name}</h1>
            <h2>email: {friend.email}</h2>
            <h3>phone: {friend.phone} </h3>
            <p>works: {friend.company?.name} </p>
        </div>
    );
};

export default FriendDetails;