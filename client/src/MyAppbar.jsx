import React, { useContext } from 'react';
import {
  AppBar, Box, Button, Toolbar, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './Context/UserContext';

export default function ButtonAppBar() {
  const { user, logoutHandler } = useContext(UserContext);
  const links = user.id ? ['main', 'info', 'admin'] : ['login', 'signup'];
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Yelp RU
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user.name ? `Hello, ${user.name}` : 'Not authed'}
          </Typography>

          {links.map((link) => (
            <Button variant="text" color="inherit" key={link} onClick={(e) => { e.preventDefault(); navigate(`/${link}`); }}>
              {link}
            </Button>
          ))}

          {user.id && (
          <Button variant="text" color="inherit" onClick={logoutHandler}>
            Logout
          </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
