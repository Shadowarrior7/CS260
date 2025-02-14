import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Practice } from './practice/practice';
import { Home } from './home/home';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/practice">
                  Practice
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Author: Brennan Duncan, </span>
            <a className="text-reset" href="https://github.com/Shadowarrior7/CS260">
              Source
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}