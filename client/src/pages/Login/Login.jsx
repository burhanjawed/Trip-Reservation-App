import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Login.scss';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;

    setCredentials((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await axios.post('/auth/login', credentials);

      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });

      navigate('/');
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error.response.data,
      });
    }
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <input
          type='text'
          className='login__input'
          placeholder='Username'
          id='username'
          onChange={handleChange}
        />
        <input
          type='password'
          className='login__input'
          placeholder='Password'
          id='password'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='login__button'
          onClick={handleLogin}
        >
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
