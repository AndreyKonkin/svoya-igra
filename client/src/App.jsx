import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import MyAppbar from './MyAppbar';
import { checkUser } from './redux/slices/userSlice';
import SignUpPage from './SignUpPage';

function App() {
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <>
      <MyAppbar />
      <Container maxWidth="lg" className="overlay" sx={{ pt: '2%' }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
