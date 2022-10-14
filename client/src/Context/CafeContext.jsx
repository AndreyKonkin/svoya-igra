import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const CafeContext = createContext();

export default function CafeContextProvider({ children }) {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    axios.post('/cafes')
      .then((res) => setCafes(res.data))
    //   .then(() => console.log(cafes))
      .catch(console.log());
  }, []);

  return (
    <CafeContext.Provider value={{
      cafes, setCafes,
    }}
    >
      {children}
    </CafeContext.Provider>
  );
}

export { CafeContext };
