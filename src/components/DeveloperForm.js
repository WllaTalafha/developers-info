import React from 'react'
import { addAction } from '../components/Developer';

function DeveloperForm({ dispatch }) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const userData = {
                id: Math.floor(Math.random() * 10000) + 10000,
                name: e.target.name.value,
                food: e.target.food.value,
                drink: e.target.drink.value,
                language: e.target.language.value,
                tech: e.target.tech.value,
            };
            console.log(userData);
            dispatch(addAction(userData));
            e.target.reset();
        }}>
            <fieldset>
                <legend>Add a Developer</legend>
                <input type='text' placeholder='User Name' name='name' required style={{ margin: '5px 1px' }} />
                <select name="language">
                    <option value="not selected">select a language ...</option>
                    <option value="java script">javaScript</option>
                    <option value="java">java</option>
                    <option value="C++">C++</option>
                </select>
                <select name="tech">
                    <option value="not selected">select a tech ...</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
                <input type='text' placeholder='Favorite Food' name='food' required style={{ margin: '5px 1px' }} />
                <input type='text' placeholder='Favorite Drink' name='drink' required style={{ margin: '5px 1px' }} />
                <input type='submit' style={{ margin: '5px 1px' }} />
            </fieldset>
        </form >
    )
}

export default DeveloperForm