import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: "Treet Ortise",
        time: "8:00 AM- 9:00 AM",
        price: 20,
        space: 10
    },
    {
        id: 2,
        name: "Cosmetice Dentist",
        time: "10:05 PM- 11:30 PM",
        price: 25,
        space: 10
    },
    {
        id: 3,
        name: "Treet Clining",
        time: "12:00 AM- 9:30 AM",
        price: 15,
        space: 10
    },
    {
        id: 4,
        name: "Treet Bodysis",
        time: "11:00 AM- 8:30 AM",
        price: 28 ,
        space: 10
    },
    {
        id: 5,
        name: "Cosmetice Cleaner",
        time: "8:30 AM- 9:00 AM",
        price: 30,
        space: 10
    },
    {
        id: 6,
        name: "Treet Bosnis",
        time: "11:00 AM- 12:00 AM",
        price: 32 ,
        space: 10
    }
]


const AvailableAppointment = ({ date }) => {
    const [bookingSucess, setBookingSucess]= useState(false)
    return (
        <Container>
            <Typography variant="h4" sx={{ my: 3, color: 'info.main', fontWeight: "bold" }} >AvailableAppointment {date.toDateString()}</Typography>
            {bookingSucess && <Alert severity="success">Successfully Booking!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        setBookingSucess={setBookingSucess}
                        key={booking.id}
                        booking={booking}
                        date={date}
                    >

                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;