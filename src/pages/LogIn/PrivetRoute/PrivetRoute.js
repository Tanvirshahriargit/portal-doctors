import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hoks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <CircularProgress></CircularProgress>
    }
    return (
        <Route
          {...rest}
          render={({ location }) =>
          user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivetRoute;