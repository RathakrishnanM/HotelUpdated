// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';

const ProtectedRoute = ({ element, ...rest }) => {
  const { token } = useAuth();

  return <Route {...rest} element={token ? element : <Navigate to="/login" />} />;
};

export default ProtectedRoute;
