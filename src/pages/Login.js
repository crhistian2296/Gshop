import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { loginRequest } from '../services/axios';

const Login = () => {
  const navigate = useNavigate();

  // Custom hook para manejo de formularios
  const { formValues, handleInputChange } = useForm({
    user: '',
    password: '',
  });

  const { user, password } = formValues;

  // Envio de los datos de acceso
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginRequest(formValues);

      // console.log(res);
      res === 'OK' ? navigate('/') : console.warn('Access denied');
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
            // id='user'
            // aria-describedby='emailHelp'
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
            // id='password'
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
