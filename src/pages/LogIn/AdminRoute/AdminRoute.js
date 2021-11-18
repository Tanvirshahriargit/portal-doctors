import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate,  useLocation } from 'react-router';
import useAuth from '../../../hoks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, loading } = useAuth();
  const location = useLocation();
    if (loading) {
        return <CircularProgress></CircularProgress>
  }
  if ( user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} /> 
};

export default AdminRoute;