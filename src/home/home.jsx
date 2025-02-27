import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';
import { getScores, addScore, hasGuessedToday, resetScores } from './scoreboard';
import confetti from 'canvas-confetti';

export function Home(props) {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [guesses, setGuesses] = useState(0);
  const [scores, setScores] = useState(getScores());
  const [hasGuessed, setHasGuessed] = useState(hasGuessedToday(props.userName));
  const [already, setAlready] = useState('');


  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  setInterval(() => {
    setScores(getScores());
  }, 1000); // Update every second

  setInterval(() => {
    setRandomNumber(generateRandomNumber());
  }, 1000 * 60 * 60 * 24); // Update every 24 hours

  function handleGuess() {
    if (hasGuessed) {
      setAlready('You have already guessed the number today. Please wait for the new daily number. Or try the practice page!');
      return;
    }

    const userGuess = parseInt(guess, 10);
    setGuesses(guesses + 1);
    if (isNaN(userGuess)) {
      setFeedback('Please enter a valid number.');
    } else if (userGuess < randomNumber) {
      setFeedback('Too low!');
    } else if (userGuess > randomNumber) {
      setFeedback('Too high!');
    } else {
      setFeedback('Correct! You guessed the number!');
      addScore(props.userName, guesses + 1);
      setScores(getScores());
      setHasGuessed(true);
      triggerConfetti();
    }
  }

  function triggerConfetti() {
    confetti({
      particleCount: 1000,
      spread: 100,
      origin: { y: 0.6 }
    });
  }

  function getDateTime() {
    return {
      date: '00/00/0000',
      time: '00:00:00'
    };
  }
  const DateTime = getDateTime();

  function handleResetScores() {
    resetScores();
    setScores(getScores());
  }

  return (
    <main>
      <div className="container">
        <div className="content">
          <h1>Daily Guess the Number!</h1>
          <p>Date: <span id="date">{DateTime.date}</span></p>
          <p>Time: <span id="time">{DateTime.time}</span></p>
          <br />
          <div>
            <label htmlFor="input">Input:</label>
            <input
              type="text"
              id="input"
              name="input"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              
            />
            <span className="feedback">{feedback}</span>
          </div>
          <div className="submit">
            <button onClick={handleGuess} className="btn btn-danger">Submit</button>
          </div>
          <div>
            {already}
          </div>

          <div className="guess-counter">
            <p>Number of guesses: {guesses}</p>
          </div>

          <div className="reset">
            <button onClick={handleResetScores} className="btn btn-warning">Reset Scores</button>
          </div>
        </div>
        <div className="sidebar">
          <h2>Top Scores</h2>
          <ul>
            {scores.map((score, index) => (
              <li key={index}>
                {score.userName}: {score.guesses} guesses on {new Date(score.date).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}