import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthContext } from './pages/authcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-fxy2vqxz8ras4kez.us.auth0.com"
      clientId="qDhNOvieJZB5srLUlfpAeI4cNQ4FVIPw"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/dashboard"
      }}
      cacheLocation="localstorage"
      context={AuthContext}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
