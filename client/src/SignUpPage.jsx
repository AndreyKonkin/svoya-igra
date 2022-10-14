import {
  Avatar, Button, Grid, Paper, TextField,
} from '@mui/material';
import React, { useContext } from 'react';
import HttpsIcon from '@mui/icons-material/Https';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './Context/UserContext';

export default function SignUpPage() {
  const { signupHandler } = useContext(UserContext);
  const navigate = useNavigate();
  const paperStyle = {
    padding: 20, height: '320px', width: 350, margin: '20px auto',
  };

  const avatarStyle = {
    backgroundColor: '#0064ff',
  };

  const buttonStyle = {
    marginTop: '20px',
  };
  return (
    <form onSubmit={(e) => { signupHandler(e, Object.fromEntries(new FormData(e.target))); navigate('/'); }}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}><HttpsIcon /></Avatar>
            <h2>Sign Up</h2>
          </Grid>
          <TextField
            variant="standard"
            name="name"
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />
          <TextField
            variant="standard"
            label="Email"
            name="email"
            type="email"
            placeholder="Enter email"
            fullWidth
            required
          />
          <TextField
            variant="standard"
            label="Password"
            name="password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <Button style={buttonStyle} type="submit" variant="contained" fullWidth>Sign up</Button>
        </Paper>
      </Grid>
    </form>
  );
}
