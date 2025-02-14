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
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <li><NavLink to="/home">login</NavLink></li>
        </center>
      </div>

      <div className="text-center mt-4">
        <img src="design.png" alt="Design Image" className="responsive-image" />
      </div>

      <footer>
        <ul>
          <button type="button" className="btn btn-primary">
            <a href="https://github.com/Shadowarrior7/CS260">GitHub</a>
          </button>
        </ul>
      </footer>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"
      ></script>
    </main>
  );
}