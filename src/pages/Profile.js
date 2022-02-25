import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const Profile = () => {
  const { state } = useContext(AuthContext);
  return (
    <div className='page d-flex justify-content-center align-items-center'>
      <h1>Usuario: {state.user}</h1>
    </div>
  );
};

export default Profile;
