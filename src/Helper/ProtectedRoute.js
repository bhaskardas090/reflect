import React from 'react';
import { Navigate, Outlet } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';

function ProtectedRoute() {
  const { user } = useAuthContext();
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
