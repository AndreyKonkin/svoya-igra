import {
  Button, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from './redux/slices/modalSlice';

export default function ItemButton() {
  const [isClick, setIsClick] = useState(false);
  const check = useSelector((state) => state.check);
  const dispatch = useDispatch();
  const modalHandler = (el) => {
    dispatch(setModal(el));
    setIsClick((prev) => !prev);
  };
  return (
    <>
      {isClick ? (
        <Button
          // variant="contained"
          style={{ backgroundColor: check ? 'green' : 'red' }}
          disabled
          onClick={() => dispatch(modalHandler('200'))}
          sx={{
            height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',
          }}
        >
          <Typography><h1>x</h1></Typography>
        </Button>
      ) : (
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
    </>
  );
}
