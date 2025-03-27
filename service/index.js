const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const { getUser, getUserByToken, addUser, updateUser, addScore, getHighScores } = require('./database');
const app = express();

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 2000;
app.use(express.json());

app.use(cookieParser());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await getUserByToken(req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  console.log('Create user endpoint hit');
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await getUserByToken(req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    await updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// ResetScores
apiRouter.post('/scores/reset', verifyAuth, async (req, res) => {
  await resetScores();
  res.status(204).end();
});

apiRouter.get('/scores', verifyAuth, async (_req, res) => {
  const scores = await getHighScores();
  //console.log('Scores sent to frontend:', scores); 
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', verifyAuth, async (req, res) => {
  //console.log('Received score data:', req.body);
  const { userName, guesses, date } = req.body;
  if (!userName || !guesses || !date) {
    console.error('Invalid score data:', req.body);
    return res.status(400).send({ msg: 'Invalid score data' });
  }
  try {
    await addScore(req.body); 
    const scores = await getHighScores();
    //console.log('Updated scores:', scores);
    res.send(scores);
  } catch (error) {
    console.error('Error saving score:', error);
    res.status(500).send({ msg: 'Failed to save score' });
  }
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});


app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});


async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await addUser(user); 

  return user;
}


function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});