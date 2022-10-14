import React, { useContext } from 'react';
import {
  AppBar, Box, Button, Toolbar, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ExtensionIcon from '@mui/icons-material/Extension';
import { UserContext } from './Context/UserContext';

export default function ButtonAppBar() {
  const { user, logoutHandler } = useContext(UserContext);
  const links = ['main', 'login', 'signup'];
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ExtensionIcon sx={{ color: 'black', mr: 1 }} />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black' }}>
            СВОЯ ИГРА
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user.name ? `Добро пожаловать, ${user.name}` : 'Не авторизованы'}
          </Typography>

          {links.map((link) => (
            <Button variant="text" color="inherit" key={link} onClick={(e) => { e.preventDefault(); navigate(`/${link}`); }}>
              {link}
            </Button>
          ))}

          {user.id && (
          <Button variant="text" color="inherit" onClick={logoutHandler}>
            Выйти
          </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
