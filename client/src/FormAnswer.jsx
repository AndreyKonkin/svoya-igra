import React from 'react';
import QuestionAnswer from '@mui/icons-material/QuestionAnswer';
import {
  Avatar, Button, Grid, Paper, TextField,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { getAnswer } from './redux/slices/gameSlice';

const paperStyle = {
  padding: 20, height: '280px', width: 350, margin: '20px auto',
};

const avatarStyle = {
  backgroundColor: '#0064ff',
};

const buttonStyle = {
  marginTop: '20px',
};

export default function FormAnswer({ modal }) {
  const dispatch = useDispatch();
  const submitHandler = (e, inputs) => {
    e.preventDefault();
    dispatch(getAnswer(inputs));
  };
  return (
    <form onSubmit={(e) => submitHandler(e, Object.fromEntries(new FormData(e.target)))}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}><QuestionAnswer /></Avatar>
            <h2>Game</h2>
          </Grid>
          <TextField
            variant="standard"
            label="Price"
            name="prise"
            type="text"
            value={modal}
            fullWidth
            disabled
          />
          <TextField
            variant="standard"
            label="Answer"
            name="answer"
            type="text"
            placeholder="Enter your answer"
            fullWidth
            required
          />
          <Button style={buttonStyle} type="submit" variant="contained" fullWidth>Accept</Button>
        </Paper>
      </Grid>
    </form>
  );
}
