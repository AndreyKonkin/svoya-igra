import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/style.css';
import UserContextProvider from './Context/UserContext';
import CafeContextProvider from './Context/CafeContext';

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <CafeContextProvider>
        <App />
      </CafeContextProvider>
    </UserContextProvider>
  </BrowserRouter>,
);
