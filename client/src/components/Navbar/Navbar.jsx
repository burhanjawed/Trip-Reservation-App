import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    try {
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
    }
  };

  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <span className='navbar__logo' onClick={() => navigate('/')}>
          Tripable
        </span>
        {user ? (
          <div className='navbar__items'>
            {user.username}
            <button className='navbar__items__button' onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className='navbar__items'>
            <button className='navbar__items__button'>Register</button>
            <button
              className='navbar__items__button'
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
