const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('GuessANumber');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addScore(score) {
    console.log('Saving score to database:', score); // Debugging log
    return scoreCollection.insertOne(score);
  }

  function getHighScores() {
    const query = {}; // Match all scores
    const options = {
      sort: { guesses: 1 }, // Sort by guesses in ascending order
      limit: 10, // Limit to top 10 scores
    };
  
    //console.log('Fetching high scores from database...'); // Debugging log
    const cursor = scoreCollection.find(query, options);
    return cursor.toArray();
  }

// Reset all scores
async function resetScores() {
  await scoreCollection.deleteMany({});
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addScore,
  getHighScores,
  resetScores,
};