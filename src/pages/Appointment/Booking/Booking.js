import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking ,date,setBookingSucess}) => {
    const { name, time, space ,price} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>      
        <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ py: 4 }} elevation={3}>
                <Typography sx={{ color: 'info.main', fontWeight: "bold" }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    price: ${price} 
                </Typography>
                <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
            </Paper>
        </Grid>
            <BookingModal
                setBookingSucess={setBookingSucess}
                booking={booking}
                date = {date}
                handleBookingClose={handleBookingClose}
                openBooking= {openBooking}
            > 
        </BookingModal>
        </>
    );
};

export default Booking;