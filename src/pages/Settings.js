import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/login');
  };

  return (
    <div className='page d-flex justify-content-center align-items-center'>
      <h1 className='btn btn-primary' onClick={() => redirect()}>
        Cerrar sesión
      </h1>
    </div>
  );
};

export default Settings;
