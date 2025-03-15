import React from 'react';
import { Button } from 'react-bootstrap'; // Ensure Button is imported from react-bootstrap
import { NavLink } from 'react-router-dom';
import './pre_login.css';

export function PreLogin(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  async function loginUser() {
    await loginOrCreate('/api/auth/login');
  }

  async function createUser() {
    await loginOrCreate('/api/auth/create');
  }

  return (
    <>
      <div>
        <center>
        <h1>Login to Guess a Number</h1>
        </center>
      </div>
      <div className='login-form'>
        <div className='input-group mb-3'>
          <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
        </div>
        <div className='input-group mb-3'>
          <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div>
        <Button variant='primary' onClick={loginUser} disabled={!userName || !password}>
          Login
        </Button>
        <Button variant='secondary' onClick={createUser} disabled={!userName || !password}>
          Create
        </Button>
        {displayError && <div className="error">{displayError}</div>}
      </div>

      <footer className="text-white-50">
        <div className="container-fluid">
          <span className="text-reset">Author: Brennan Duncan, </span>
          <a className="text-reset" href="https://github.com/Shadowarrior7/CS260">
            Source
          </a>
        </div>
      </footer>
    </>
  );
}