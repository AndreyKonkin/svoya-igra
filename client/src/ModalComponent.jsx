import { Box, Modal, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from './redux/slices/modalSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalComponent() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setModal(null));
  return (
    <Modal
      open={modal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          question
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Напишите ваш ответ
        </Typography>
      </Box>
    </Modal>
  );
}
