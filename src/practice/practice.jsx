import React, { useState } from 'react';
import './practice.css';
import { generateRandomNumber } from './numLogic';

export function Practice() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [guesses, setGuesses] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  function handleGuess() {
    const userGuess = parseInt(guess, 10);
    if (isNaN(userGuess)) {
      setFeedback('Please enter a valid number.');
    } else {
      setGuesses(guesses + 1);
      if (userGuess < randomNumber) {
        setFeedback('Too low!');
      } else if (userGuess > randomNumber) {
        setFeedback('Too high!');
      } else {
        setFeedback('Correct! You guessed the number!');
        setIsCorrect(true);
      }
    }
  }

  function handleNewNumber() {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setFeedback('');
    setGuesses(0);
    setIsCorrect(false);
  }

  return (
    <main>
      <div className="container">
        <h1>Practice</h1>
        <div className="input-container">
          <label htmlFor="input">Input:</label>
          <input
            type="text"
            id="input"
            name="input"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            disabled={isCorrect}
          />
          <span className="feedback">{feedback}</span>
        </div>
        <div className="submit">
          <button onClick={handleGuess} className="btn btn-danger" disabled={isCorrect}>Submit</button>
        </div>
        <div className="new-number">
          <button onClick={handleNewNumber} className="btn btn-primary">Generate New Number</button>
        </div>
        <div className="guess-counter">
          <p>Number of guesses: {guesses}</p>
        </div>
      </div>
    </main>
  );
}