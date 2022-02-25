import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const PublicRoutes = () => {
  const { state } = useContext(AuthContext);

  const { logged } = state;

  return logged === true ? <Navigate to='/' /> : <Outlet />;
};

export default PublicRoutes;
