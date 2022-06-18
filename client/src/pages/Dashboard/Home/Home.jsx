import React from 'react';
import { DashboardNavbar, DashboardSidebar } from '../../../components';
import './Home.scss';

const Home = () => {
  return (
    <div className='dashboard__home'>
      <DashboardSidebar />
      <div className='dashboard__home__container'>
        <DashboardNavbar />
        Home Container
      </div>
    </div>
  );
};

export default Home;
