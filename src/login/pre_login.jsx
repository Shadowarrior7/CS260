import React from 'react';
import { Button } from 'react-bootstrap'; // Ensure Button is imported from react-bootstrap
import { NavLink } from 'react-router-dom';
import './pre_login.css';

export function PreLogin(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <>
      <div>
        <div className='input-group mb-3'>
          <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
        </div>
        <div className='input-group mb-3'>
          <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div>
        <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
          Login
        </Button>
        <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
          Create
        </Button>
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

{/* <div className="content">
        <center>
          <h1>Login to play guess a number!</h1>
          <br /><br />
          <h3>Login</h3>
          <h5>login will be replaced with db and actual login</h5>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" /><br /><br />
            <button type="submit" className="btn btn-secondary">Login</button>
          </form>
        </center>
      </div> */}