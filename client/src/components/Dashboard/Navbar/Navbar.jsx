import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import './Navbar.scss';
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/DarkModeContext';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='dashboard__navbar'>
      <div className='dashboard__navbar__wrapper'>
        <div className='dashboard__navbar__search'>
          <input type='text' placeholder='Search' />
          <SearchOutlinedIcon className='dashboard__navbar__icon' />
        </div>
        <div className='dashboard__navbar__items'>
          <div className='dashboard__navbar__items__item'>
            <LanguageOutlinedIcon className='dashboard__navbar__icon' />
            English
          </div>
          <div className='dashboard__navbar__items__item'>
            <DarkModeOutlinedIcon
              className='dashboard__navbar__icon'
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>
          <div className='dashboard__navbar__items__item'>
            <FullscreenExitOutlinedIcon className='dashboard__navbar__icon' />
          </div>
          <div className='dashboard__navbar__items__item'>
            <NotificationsNoneOutlinedIcon className='dashboard__navbar__icon' />
            <div className='dashboard__navbar__items__item__counter'>1</div>
          </div>
          <div className='dashboard__navbar__items__item'>
            <ChatBubbleOutlineOutlinedIcon className='dashboard__navbar__icon' />
            <div className='dashboard__navbar__items__item__counter'>2</div>
          </div>
          <div className='dashboard__navbar__items__item'>
            <ListOutlinedIcon className='dashboard__navbar__icon' />
          </div>
          <div className='dashboard__navbar__items__item'>
            <img
              src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt='User Avatar'
              className='dashboard__navbar__items__item__avatar'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
