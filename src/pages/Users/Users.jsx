import React from "react";
import { useEffect, useState } from "react";
import "./users.scss";
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + "/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
    }, []);
  return (
    <>
      <div className="container">
        <h1 className="users__heading">Users</h1>

        {users.length > 0 && <ul className="users__list">
            {users.map(user => (
                <li className="users__item" key={user.id}>
                <Link className="users__link" to={'/user/' + user.id}>{user.name}</Link>
            </li>
            ))}    
        </ul>}

      </div>
    </>
  );
};

export default Users;
