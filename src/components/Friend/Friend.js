import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'
const Friend = (props) => {
    const { id, name, username, address } = props.friend;
    const history = useHistory();
    const url = `/friend/${id}`
    const handleFriendClick = () => {
        history.push(`/friend/${id}`)
    }
    return (
        <div className="friend" >
            <h2>Id: {id}</h2>
            <h2>name: {name}</h2>
            <h3>username: {username}</h3>
            <p>address: {address.city}</p>
            <Link to={url} >Visit me</Link>
            <br />
            <Link to={url}>
                <button>Visit me</button>

            </Link>
            <button onClick={handleFriendClick}>visit me 2
            </button>
        </div>
    );
};

export default Friend;