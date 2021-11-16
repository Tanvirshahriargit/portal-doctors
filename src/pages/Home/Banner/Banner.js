import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import chair from "../../../images/chair.png"
import bg from "../../../images/bg.png"
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
    height: 450
}

const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height: 400

}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter ,textAlign: "left" }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your Smile <br />
                            starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 13, my:3, fontWeight: 300, color: "gray" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quasi inventore unde fugit quas labore. Similique minima maiores dolore deserunt.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#35E6D0" }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={4} md={6} style={verticalCenter}>
                    <img style={{ width: 350 }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;