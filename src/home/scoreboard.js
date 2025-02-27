export function getScores() {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    return scores.sort((a, b) => a.guesses - b.guesses || new Date(a.date) - new Date(b.date));
  }
  
  export function addScore(userName, guesses) {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    const newScore = {
      userName,
      guesses,
      date: new Date().toISOString()
    };
    scores.push(newScore);
    localStorage.setItem('scores', JSON.stringify(scores));
  }
  
  export function hasGuessedToday(userName) {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    const today = new Date().toISOString().split('T')[0];
    return scores.some(score => score.userName === userName && score.date.split('T')[0] === today);
  }
  
  export function resetGuesses() {
    localStorage.removeItem('scores');
  }

  export function resetScores() {
    localStorage.removeItem('scores');
  }