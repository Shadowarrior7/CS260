import React from 'react';
import { NavLink } from 'react-router-dom';
import './practice.css';

export function Practice() {
return (
    <main>
        <div className="container">
            <h1>Practice</h1>
            <form>
                <label htmlFor="guess">Guess:  </label>
                <input type="text" id="guess" name="guess" />
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
            <br />
            <button className="btn btn-secondary">New Number</button>
            <br />
        </div>
    </main>
);
}