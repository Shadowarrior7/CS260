import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';

export function Home() {
  return (
    <main>
      <div className="container">
        <div className="content">
          <h1>Daily Guess the Number!</h1>
          <h5>The time and date are 3rd party API placeholders</h5>
          <p>Date: <span id="date">MM/DD/YYYY</span></p>
          <p>Time: <span id="time">HH:MM:SS</span></p>
          <br />
          <div>
            <label htmlFor="input">Input:</label>
            <input type="text" id="input" name="input" />
            <span id="light-high">High</span>
            <span id="light-low">Low</span>
          </div>
          <div className="logout">
          <NavLink to="/login" className="btn btn-danger">Logout</NavLink>
          </div>
        </div>
        <div className="sidebar">
          <h2>Top Scores</h2>
          <h4>To be replaced with WebSocket and DB</h4>
          <ul>
            <li>Player 1: 100</li>
            <li>Player 2: 90</li>
            <li>Player 3: 80</li>
            <li>Player 4: 70</li>
            <li>Player 5: 60</li>
          </ul>
        </div>
      </div>
    </main>
  );
}