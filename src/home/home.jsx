import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';
import { getScores, hasGuessedToday, resetScores } from './scoreboard';
import confetti from 'canvas-confetti';
import { GameNotification } from './gameNotification';

export function Home(props) {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [guesses, setGuesses] = useState(0);
  const [scores, setScores] = useState([]);
  const [hasGuessed, setHasGuessed] = useState(false);
  const [already, setAlready] = useState('');
  const [localDateTime, setLocalDateTime] = useState({ date: '', time: '' });
  const [worldDateTime, setWorldDateTime] = useState({ date: '', time: '', dateTime: '' });
  const [socket, setSocket] = useState(null);


  //ws stuff
  useEffect(() => {
    // Establish WebSocket connection
    const ws = new WebSocket(`ws://${window.location.hostname}:4000`);
    setSocket(ws);

    ws.onmessage = (event) => {
      const notification = JSON.parse(event.data);
      console.log('Received WebSocket notification:', notification);

      if (notification.type === 'scoreUpdate') {
        console.log('Updating scores from WebSocket:', notification.data);
        setScores(notification.data);
      } else if (notification.type === 'resetScores') {
        setScores([]);
      } else {
        console.warn('Unknown notification type:', notification.type);
      }
    };

    ws.onclose = () => {
      console.error('WebSocket connection closed');
      
    };



    return () => {
      ws.close();
    };
  }, []);




  useEffect(() => {
    async function fetchScores() {
      const scores = await getScores();
      setScores(scores);
      setHasGuessed(await hasGuessedToday(props.userName));
    }
    fetchScores();
  }, [props.userName]);

  useEffect(() => {
    function fetchLocalDateTime() {
      const now = new Date();
      setLocalDateTime({
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString()
      });
    }
    fetchLocalDateTime();
    const intervalId = setInterval(fetchLocalDateTime, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    async function fetchWorldDateTime() {
      try {
        const dateTime = await getDateTime();
        console.log('Fetched world dateTime:', dateTime); // Debugging log
        setWorldDateTime(dateTime);
      } catch (error) {
        console.error('Error fetching world dateTime:', error);
        // Fallback to local date and time
        const now = new Date();
        setWorldDateTime({
          date: now.toLocaleDateString(),
          time: now.toLocaleTimeString(),
          dateTime: now.toISOString()
        });
        console.error('Using local date and time due to error.');
      }
    }
    fetchWorldDateTime();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const dateTime = await getDateTime();
        console.log('Updated world dateTime:', dateTime); // Debugging log
        setWorldDateTime(dateTime);
      } catch (error) {
        console.error('Error updating world dateTime:', error);
        // Fallback to local date and time
        const now = new Date();
        setWorldDateTime({
          date: now.toLocaleDateString(),
          time: now.toLocaleTimeString(),
          dateTime: now.toISOString()
        });
        console.error('Using local date and time due to error.');
      }
    }, 100000); // Update every minute instead of every second

    return () => clearInterval(intervalId);
  }, []);

  async function saveScore(score) {
    console.log('Current worldDateTime:', worldDateTime); // Debugging log
  
    const newScore = { userName: props.userName, guesses: score, date: worldDateTime.dateTime };
    console.log('Sending score data:', newScore); // Debugging log
  
    const response = await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });
  
    if (!response.ok) {
      console.error('Failed to save score:', response.statusText); // Debugging log
      return;
    }
  
    const updatedScores = await getScores();
    console.log('Scores after saving:', updatedScores); // Debugging log
    setScores(updatedScores);
  }

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // useEffect(() => {
  //   const intervalId = setInterval(async () => {
  //     const updatedScores = await getScores();
  //     console.log('Updated scores:', updatedScores); // Debugging log
  //     setScores(updatedScores);
  //   }, 1000); // Update every second

  //   return () => clearInterval(intervalId);
  // }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomNumber(generateRandomNumber());
    }, 1000 * 60 * 60 * 24); // Update every 24 hours

    return () => clearInterval(intervalId);
  }, []);

  async function handleGuess() {
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
      await saveScore(guesses + 1);
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

  async function getDateTime() {
    try {
      const response = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Raw Response from API:', data); // Debugging log
  
      try {
        return {
          date: new Date(data.datetime).toLocaleDateString(),
          time: new Date(data.datetime).toLocaleTimeString(),
          dateTime: new Date(data.datetime).toISOString(),
        };
      } catch (jsonError) {
        console.error('Invalid JSON response:', text);
        throw new Error('Failed to parse JSON response');
      }
    } catch (error) {
      console.error('Error fetching dateTime:', error);
      // Fallback to local date and time
      const now = new Date();
      return {
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        dateTime: now.toISOString(),
      };
    }
  }
  
  
  

  async function handleResetScores() {
    await resetScores();
    // const updatedScores = await getScores();
    // setScores(updatedScores);
  }

  return (
    <main>
      <div className="container">
        <div className="content">
          <h1>Daily Guess the Number!</h1>
          <p>Date: <span id="date">{localDateTime.date}</span></p>
          <p>Time: <span id="time">{localDateTime.time}</span></p>
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

          {/* <div className="reset">
            <button onClick={handleResetScores} className="btn btn-warning">Reset Scores</button>
          </div> */}
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