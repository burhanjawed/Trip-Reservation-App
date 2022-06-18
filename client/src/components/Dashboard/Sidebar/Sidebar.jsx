import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Sidebar.scss';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className='dashboard__sidebar'>
      <div className='dashboard__sidebar__top'>
        <span
          className='dashboard__sidebar__logo'
          onClick={() => navigate('/')}
        >
          Tripable
        </span>
      </div>
      <hr />
      <div className='dashboard__sidebar__center'>
        <ul>
          <li
            onClick={() => navigate('/')}
            className='dashboard__sidebar__backBtn'
          >
            <ArrowBackIosIcon className='dashboard__sidebar__icon' />
            <span>Main Website</span>
          </li>
          <p className='dashboard__sidebar__title'>Main</p>
          <li>
            <DashboardIcon className='dashboard__sidebar__icon' />
            <span>Dashboard</span>
          </li>
          <p className='dashboard__sidebar__title'>Lists</p>
          <li>
            <PersonIcon className='dashboard__sidebar__icon' />
            <span>Users</span>
          </li>
          <li>
            <StoreIcon className='dashboard__sidebar__icon' />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon className='dashboard__sidebar__icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='dashboard__sidebar__icon' />
            <span>Delivery</span>
          </li>
          <p className='dashboard__sidebar__title'>Useful</p>
          <li>
            <AssessmentIcon className='dashboard__sidebar__icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className='dashboard__sidebar__icon' />
            <span>Notifications</span>
          </li>
          <p className='dashboard__sidebar__title'>Service</p>
          <li>
            <HealthAndSafetyIcon className='dashboard__sidebar__icon' />
            <span>System Health</span>
          </li>
          <li>
            <ArticleIcon className='dashboard__sidebar__icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='dashboard__sidebar__icon' />
            <span>Settings</span>
          </li>
          <p className='dashboard__sidebar__title'>User</p>
          <li>
            <AccountBoxIcon className='dashboard__sidebar__icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='dashboard__sidebar__icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='dashboard__sidebar__bottom'>
        <div className='dashboard__sidebar__colorOption'></div>
        <div className='dashboard__sidebar__colorOption'></div>
      </div>
    </div>
  );
};

export default Sidebar;
