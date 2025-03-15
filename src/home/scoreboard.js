export async function getScores() {
  const response = await fetch('/api/scores');
  const scores = await response.json();
  return scores.sort((a, b) => a.guesses - b.guesses || new Date(a.date) - new Date(b.date));
}

export async function hasGuessedToday(userName) {
  const scores = await getScores();
  const today = new Date().toISOString().split('T')[0];
  return scores.some(score => score.userName === userName && score.date.split('T')[0] === today);
}

export async function resetScores() {
  await fetch('/api/scores/reset', {
    method: 'POST',
  });
}