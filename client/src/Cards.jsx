import {
  Grid, Paper, styled, Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemButton from './ItemButton';
// import { setModal } from './redux/slices/modalSlice';

export default function Cards() {
  // const dispatch = useDispatch();
  // const modalHandler = (el) => {
  //   dispatch(setModal(el));
  // };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.post('/game')
      .then((res) => setState(res.data));
  }, []);

  return (
    <>
      {state.map((el) => (
        <Grid xs={2} sm={2} md={2} sx={{ p: 1, height: 130, marginRight: 'auto' }} key={el.id}>
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
            <ItemButton q={q} />
          ))}
        </Grid>
      ))}

    </>

  // Array.from(Array(30)).map((el, index) => (
  //   // eslint-disable-next-line react/no-array-index-key
  //   <Grid xs={2} sm={2} md={2} sx={{ p: 1, height: '60%' }} key={index}>
  //     {(index === 0 || index % 6 === 0) ? (
  //       <Item sx={{
  //         height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4EBCFF',
  //       }}
  //       >
  //         <Typography sx={{ color: 'white' }}><h1>.</h1></Typography>
  //       </Item>
  //     )
  //       : (
  //         // <Button
  //         //   variant="contained"
  //         //   onClick={() => dispatch(modalHandler('200'))}
  //         //   sx={{
  //         // height: 100, display: 'flex', alignItems: 'center',
  //         //  justifyContent: 'center', width: '100%',
  //         //   }}
  //         // >
  //         //   <Typography><h1>x</h1></Typography>
  //         // </Button>
  //         <ItemButton />
  //       )}
  //   </Grid>
  // ))
  );
}
