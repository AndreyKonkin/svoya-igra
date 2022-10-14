import React from 'react';
import {
  Button,
  Grid, Paper, styled, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setModal } from './redux/slices/modalSlice';

export default function Cards() {
  const dispatch = useDispatch();
  const modalHandler = (el) => {
    dispatch(setModal(el));
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    Array.from(Array(30)).map((el, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Grid xs={2} sm={2} md={2} sx={{ p: 1, height: '60%' }} key={index}>
        {(index === 0 || index % 6 === 0) ? (
          <Item sx={{
            height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4EBCFF',
          }}
          >
            <Typography sx={{ color: 'white' }}><h1>.</h1></Typography>
          </Item>
        )
          : (
            <Button
              variant="contained"
              onClick={() => dispatch(modalHandler('200'))}
              sx={{
                height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',
              }}
            >
              <Typography><h1>x</h1></Typography>
            </Button>
          )}
      </Grid>
    ))
  );
}
