import React from 'react';
import { NavLink } from 'react-router-dom';
import './logged_in.css';

export function LoggedIn() {
  return (
    <main>
      <div className="content">
        <center>
          <h1>Welcome to Guess a number!</h1>
          <br /><br />
          <h3>Instructions</h3>
          <h5>fill with instructions later</h5>
          <NavLink to="/home" className="btn btn-danger">Lets Get Started!</NavLink>
        </center>
      </div>


      <footer className="bg-dark text-white-50">
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