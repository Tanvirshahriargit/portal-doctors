import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Login from "../.../../../../images/login.png"
import useAuth from '../../../hoks/useAuth';
const Register = () => {
    const {user, registerUser ,loading, authError} = useAuth();
    const history = useHistory();
    const location = useHistory();
    const [loginData, setLoginData]= useState({})
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindata = { ...loginData };
        newLogindata[field] = value;
        console.log(field,value, newLogindata);
        setLoginData(newLogindata);

    }


    const handeLogInSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert("Your Password did not match")
            return;
        }
        registerUser(loginData.email , loginData.password,loginData.name , history)
        // alert("Helloe")

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt:5}} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!loading && <form onSubmit={handeLogInSubmit}>
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            name="name"
                            onBlur={handleOnBlur}
                            label="Your Name"
                            variant="standard" />
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            label="Your Email"
                            variant="standard" />
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            label="Your Password"
                            variant="standard" />
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            label="Re-Type Your Password"
                            variant="standard" />
                        <Button type="submit" sx={{ width: "75%", mt: 4 }} variant="contained">Register</Button>
                        <NavLink style={{textDecoration:"none"}} to="/login"><Button variant="text"> AlreadyRegister? Please Log In</Button></NavLink>
                        
                    </form>}
                    {loading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User successfully Register!</Alert>}
                    {authError && <Alert severity="error">{ authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={Login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;