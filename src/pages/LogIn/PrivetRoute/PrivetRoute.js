import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hoks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  let location = useLocation();
    if (loading) {
        return <CircularProgress></CircularProgress>
  }
  
  if (user.email) {
    return children;
  }
  return  <Navigate to="/login" state={{ from: location }} />; 
};

export default PrivetRoute;