import {
  Button,
  Grid, Paper, styled, Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function MainPage() {
  const [state, setState] = useState([]);
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  useEffect(() => {
    axios.post('/game')
      .then((res) => setState(res.data));
  }, []);
  console.log(state);

  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
      {state.map((el) => (
        <Grid xs={2} sm={2} md={2} sx={{ p: 0.5, height: 130 }} key={el.id}>
          <Item sx={{
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#4EBCFF',
          }}
          >
            <Typography sx={{ color: 'white' }}><h3>{el.title}</h3></Typography>
          </Item>
          {el.Questions.map((q) => (
            <Button
              variant="contained"
              sx={{
                mt: '0.5rem',
                height: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Typography><h1>{q.prise}</h1></Typography>
            </Button>
          ))}
        </Grid>
      ))}
      {/* {Array.from(Array(30)).map((_, index) => (

        // eslint-disable-next-line react/no-array-index-key
        <Grid xs={2} sm={2} md={2} sx={{ p: 1, height: 130 }} key={index}>
          {(index === 0 || index % 6 === 0) ? (
            <Item sx={{
              height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4EBCFF',
            }}
            >
              <Typography sx={{ color: 'white' }}><h1>x</h1></Typography>
            </Item>
          )
            : (
              <Button
                variant="contained"
                sx={{
                  height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',
                }}
              >
                <Typography><h1>x</h1></Typography>
              </Button>
            )}
        </Grid>
      ))} */}
    </Grid>
  );
}
