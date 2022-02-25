import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

const Settings = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  //* Eliminacion del LocalStorage
  const logoutAction = () => {
    dispatch({
      type: types.logout,
    });
  };

  const handleClick = () => {
    logoutAction();
    navigate('/login');
  };

  return (
    <div className='page d-flex justify-content-center align-items-center'>
      <h1 className='btn btn-primary' onClick={() => handleClick()}>
        Cerrar sesión
      </h1>
    </div>
  );
};

export default Settings;
