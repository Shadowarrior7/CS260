import React from 'react';
import { NavLink } from 'react-router-dom';
import './logged_in.css';

export function LoggedIn(props) {

  function logout() {
    localStorage.removeItem('userName');
    props.onLogout();
  }

  return (
    <main>
      <div className="content">
        <center>
          <h1>Welcome to Guess a number!</h1>
          <br /><br />
          <h3>Instructions</h3>
          <div className='instructions'>
            <h5>This is the website that you can guess a daily number! 
              Submit a guess and the site will tell you if your guess is too high or low. 
              If you guess correctly you'll get a surprise! If you wish to hone your number guessing skills, 
              the practice page will hep you out!</h5>
          </div>
          <NavLink to="/home" className="btn btn-primary">Lets Get Started!</NavLink>
          <NavLink to="/login" className="btn btn-danger" onClick={() => logout()}>
            Logout
          </NavLink>
        </center>
      </div>


      <footer className="text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Author: Brennan Duncan, </span>
            <a className="text-reset" href="https://github.com/Shadowarrior7/CS260">
              Source
            </a>
          </div>
        </footer>
    </main>
  );
}