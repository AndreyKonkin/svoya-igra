import { Container } from '@mui/material';
import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from './AdminPage';
import { UserContext } from './Context/UserContext';
import ProtectedRoute from './HOCs/ProtectedRoute';
import InfoPage from './InfoPage';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import MyAppbar from './MyAppbar';
import NoPage from './NoPage';
import SignUpPage from './SignUpPage';

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <MyAppbar />
      <Container maxWidth="lg" className="overlay" sx={{ height: '100vh' }}>
        <Routes>
          <Route element={<ProtectedRoute isAllowed={!!user.id} />}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/info" element={<InfoPage />} />
          </Route>
          <Route path="/admin" element={<ProtectedRoute isAllowed={!!user.id && user.name === 'admin'}><AdminPage /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
