import React from 'react';
import User from './User';

function DeveloperList({ users, dispatch }) {
    return (
        <div>
            {(users.length) ? users.map((user, index) => <User key={index} user={user} dispatch={dispatch} />) : <p>No users</p>}
        </div>
    )
}

export default DeveloperList;