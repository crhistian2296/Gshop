import React from 'react';
import { openDoorRequest } from '../services/axios';

const Home = () => {
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await openDoorRequest();

      // console.log(res);
      res === 'OK' ? alert('Puerta abierta') : alert('Access denied');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='page d-flex justify-content-center align-items-center'>
      <h1 className='btn btn-primary' onClick={handleClick}>
        Abrir puerta
      </h1>
    </div>
  );
};

export default Home;
