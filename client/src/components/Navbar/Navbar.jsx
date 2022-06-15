import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <span className='navbar__logo' onClick={() => navigate('/')}>
          Tripable
        </span>
        <div className='navbar__items'>
          <button className='navbar__items__button'>Register</button>
          <button className='navbar__items__button'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
