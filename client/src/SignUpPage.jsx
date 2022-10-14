import {
  Avatar, Button, Grid, Paper, TextField,
} from '@mui/material';
import React from 'react';
import HttpsIcon from '@mui/icons-material/Https';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from './redux/slices/userSlice';

export default function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paperStyle = {
    padding: 20, height: '320px', width: 350, margin: '20px auto',
  };

  const avatarStyle = {
    backgroundColor: '#0064ff',
  };

  const buttonStyle = {
    marginTop: '20px',
    backgroundColor: '0064ff',
  };
  return (
    <form onSubmit={(e) => { dispatch(signupUser(e, Object.fromEntries(new FormData(e.target)))); navigate('/'); }}>
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
