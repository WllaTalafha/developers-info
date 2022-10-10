import React from 'react'
import { removeAction } from './Developer';
function User({ user, dispatch }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Techs</th>
                        <th>Favorite Food</th>
                        <th>Favorite Drink</th>
                    </tr>
                </thead>
                <tbody onClick={() => { dispatch(removeAction(user.id)) }}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.language}</td>
                    <td>{user.tech}</td>
                    <td>{user.food}</td>
                    <td>{user.drink}</td>
                </tbody>
            </table>
        </div>
    )
}
export default User