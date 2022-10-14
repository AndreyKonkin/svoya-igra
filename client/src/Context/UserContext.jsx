import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.post('/user/check')
      .then((res) => setUser(res.data))
      .catch(console.log());
  }, []);

  const signupHandler = (e, inputs) => {
    e.preventDefault();
    axios.post('/user/signup', inputs)
      .then((res) => setUser(res.data))
      .catch(console.log);
  };

  const loginHandler = (e, inputs) => {
    e.preventDefault();
    axios.post('/user/login', inputs)
      .then((res) => setUser(res.data))
      .catch(console.log);
  };

  const logoutHandler = () => {
    axios('/user/logout')
      .then(() => setUser({}))
      .catch(console.log());
  };

  return (
    <UserContext.Provider value={{
      user, signupHandler, loginHandler, logoutHandler,
    }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext };
