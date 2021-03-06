import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const PrivateRoutes = () => {
  const { state } = useContext(AuthContext);

  const { logged } = state;

  return logged === true ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;
