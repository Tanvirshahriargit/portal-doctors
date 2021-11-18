import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink ,useLocation, useNavigate} from 'react-router-dom';
import Login from "../.../../../../images/login.png"
import useAuth from '../../../hoks/useAuth';

const LogIn = () => {
    const [loginData, setLoginData] = useState({});
    const {signInwithGoogle, user, logInUser, loading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    

    const handleOnchnage = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindata = { ...loginData };
        newLogindata[field] = value;
        setLoginData(newLogindata);

    }
    const handeLogInSubmit = e => {
        logInUser(loginData.email , loginData.password, location, navigate)
        e.preventDefault();
    }

    // handle google sign in 
    const handleGoogleSignIn = () => {
        signInwithGoogle(location, navigate)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt:5}} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handeLogInSubmit}>
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            name="email"
                            onBlur={handleOnchnage}
                            label="Your Email"
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            type="password"
                            name="password"
                            onBlur={handleOnchnage}
                            label="Your Password"
                            variant="standard" />
                        <Button type="submit" sx={{ width: "75%", mt: 4 }} variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: "none" }} to="/register"><Button variant="text"> New?UserPlease Register</Button></NavLink>
                        {loading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User successfully Register!</Alert>}
                    {authError && <Alert severity="error">{ authError}</Alert>}
                    </form>
                    <p>----------------------------------------------- </p>
                    <Button onClick ={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={Login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default LogIn;