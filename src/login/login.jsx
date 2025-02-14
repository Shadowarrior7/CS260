import React from 'react';
import { NavLink } from 'react-router-dom';
import './login.css';

export function Login() {
  return (
    <main>
      <div className="content">
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
      </div>

      <div className="text-center mt-4">
        <img src="design.png" alt="Design Image" className="responsive-image" />
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