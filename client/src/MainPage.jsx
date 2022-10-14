import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import ModalComponent from './ModalComponent';
import Cards from './Cards';

export default function MainPage() {
  const user = useSelector((state) => state.user);

  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
      {user?.id ? (
        <>
          <Cards />
          <ModalComponent />
          <Grid xs={12}>
            <div className="score"><h2>Ваш счёт:</h2></div>
          </Grid>
        </>
      ) : <div>x</div>}
    </Grid>
  );
}
