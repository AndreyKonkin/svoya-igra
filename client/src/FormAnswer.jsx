import QuestionAnswer from '@mui/icons-material/QuestionAnswer';
import {
  Avatar, Button, Grid, TextField,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getAnswer } from './redux/slices/gameSlice';

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
        <Grid align="center">
          <Avatar style={avatarStyle}><QuestionAnswer /></Avatar>
          <h2>Game</h2>
        </Grid>
        <TextField
          variant="standard"
          label="Баллы"
          name="prise"
          type="text"
          value={modal}
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          variant="standard"
          label="Ответ"
          name="answer"
          type="text"
          placeholder="Enter your answer"
          fullWidth
          required
        />
        <Button style={buttonStyle} type="submit" variant="contained" fullWidth>Ответить</Button>
      </Grid>
    </form>
  );
}
