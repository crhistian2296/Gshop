import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import useForm from '../hooks/useForm';
import { loginRequest } from '../services/axios';
import { types } from '../types/types';

const Login = () => {
  const navigate = useNavigate();

  //* Custom hook para manejo de formularios
  const { formValues, handleInputChange } = useForm({
    user: '',
    password: '',
  });

  const { user, password } = formValues;

  //* Anexar a LocalStorage
  const { dispatch } = useContext(AuthContext);

  const loginAction = (user, password) => {
    dispatch({ type: types.login, payload: { user, password } });
  };

  //* Envio de los datos de acceso
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginRequest(formValues);

      // console.log(res);
      // res === 'OK' ? navigate('/') : console.warn('Access denied');
      if (res !== 'OK') return console.warn('Acces denied');

      loginAction(user, password);
      return navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='page d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='user' className='form-label'>
            Username
          </label>
          <input
            type='text'
            onChange={handleInputChange}
            name='user'
            value={user}
            className='form-control'
            id='user'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            onChange={handleInputChange}
            name='password'
            value={password}
            className='form-control'
            id='password'
          />
        </div>
        <div className='mb-3 form-check'>
          <input type='checkbox' className='form-check-input' id='exampleCheck1' />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
