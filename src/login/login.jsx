import React from 'react';
import { PreLogin as Unauthenticated } from './pre_login';
import { LoggedIn as Authenticated } from './logged_in';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main>
      <div>
        {authState !== AuthState.Unknown && <h1></h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              localStorage.setItem('userName', loginUserName);
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}