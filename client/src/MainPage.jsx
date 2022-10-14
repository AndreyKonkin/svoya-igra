import React, { useContext } from 'react';
import {
  Card, CardContent, CardMedia, Container, Grid, Typography,
} from '@mui/material';
import { CafeContext } from './Context/CafeContext';

export default function MainPage() {
  const { cafes } = useContext(CafeContext);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {cafes?.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#7CACBD',
              }}
            >
              <CardMedia
                component="img"
                image={`${card.url}`}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {`${card.cafeName}`}
                </Typography>
                <Typography>
                  {`${card.description}`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
