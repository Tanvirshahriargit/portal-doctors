import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';
import { margin } from '@mui/system';

const appointmenbg = {
    background: `url(${bg})`,
    backgroundColor: "rgba(45, 58, 74, 0.9)",
    backgroundBlendMode: "darken, luminosity",
    marginTop: 175,
    backgroundPosition: "center",

}

const AppointmentBanner = () => {
    return (
        <Box style={appointmenbg} sx={{ flexGrow: 1, mb: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{
                        width: 400,
                        marginTop: "-110px"
                    }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex', justifyContent: 'flex-start',
                    textAlign: "left",alignItems: 'center'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{mb:4}} style={{ color: "#35E6D0" }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{mb:4}} style={{ color: "white" }}>
                            Make An Appointment
                            Tody
                        </Typography>
                        <Typography variant="h6" sx={{my:5}} style={{ color: "white", fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repudiandae voluptates officia! Quam reiciendis suscipit optio error
                        </Typography>
                        <Button variant="contained" sx={{mb:5}} style={{ backgroundColor: "#35E6D0" }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;