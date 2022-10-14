import React from 'react';
import {
  AppBar, Box, Button, Toolbar, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ExtensionIcon from '@mui/icons-material/Extension';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from './redux/slices/userSlice';

export default function MyAppbar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const links = ['main', 'login', 'signup'];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ExtensionIcon sx={{ color: 'black', mr: 1 }} />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black' }}>
            СВОЯ ИГРА
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user?.name ? `Добро пожаловать, ${user.name}` : 'Не авторизованы'}
          </Typography>

          {links.map((link) => (
            <Button variant="text" color="inherit" key={link} onClick={(e) => { e.preventDefault(); navigate(`/${link}`); }}>
              {link}
            </Button>
          ))}

          {user?.id && (
          <Button variant="text" color="inherit" onClick={() => dispatch(logoutUser())}>
            Выйти
          </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
