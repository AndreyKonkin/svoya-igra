import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import MyAppbar from './MyAppbar';
import SignUpPage from './SignUpPage';

function App() {
  return (
    <>
      <MyAppbar />
      <Container maxWidth="lg" className="overlay" sx={{ height: '100vh' }}>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
