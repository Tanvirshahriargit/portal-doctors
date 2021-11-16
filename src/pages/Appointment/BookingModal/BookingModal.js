import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import useAuth from '../../../hoks/useAuth';

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
const BookingModal = ({ openBooking, handleBookingClose, booking , date, setBookingSucess}) => {
  const { name, time ,price } = booking;
  const { user } = useAuth();
  const initailInfo = {patientName: user.displayName, email: user.email, phone: ""}
  const [bookingInfo, setBookingInfo] = useState(initailInfo)
  
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  }
  
  const handleBookingSubmit = e => {
    // Collectr Data from 
    const appointment = {
      ...bookingInfo,
      price,
      time,
      serviceName: name,
      date: date.toLocaleDateString()
    }
    // send to the server
    fetch('https://shrouded-retreat-34385.herokuapp.com/appointments', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(appointment)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          setBookingSucess(true);
        handleBookingClose();  
      }
    })
    e.preventDefault();
}

  return (
    <Modal
      open={openBooking}
      onClose={handleBookingClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h2" component="h2">
          {name}
        </Typography>
        <form onSubmit={handleBookingSubmit}>
          <TextField
            disabled
            sx={{ width: "90%", m:1}}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
          <TextField
            sx={{ width: "90%", m:1}}
            id="outlined-size-small"
            onBlur={handleOnBlur}
            name= "patientName"
          defaultValue={user?.displayName}
          size="small"
        />
          <TextField
            sx={{ width: "90%", m:1}}
            id="outlined-size-small"
            onBlur={handleOnBlur}
            name="email"
          defaultValue={user?.email}
          size="small"
        />
          <TextField
            sx={{ width: "90%", m:1}}
            id="outlined-size-small"
            name="phone"
            onBlur={handleOnBlur}
          defaultValue="Your Phone Number"
          size="small"
        />
          <TextField
            disabled
            sx={{ width: "90%", m:1}}
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          size="small"
        />
        <Button type="submit" variant="contained">Submit</Button>
        </form>

      </Box>
    </Modal>
  );
};

export default BookingModal;