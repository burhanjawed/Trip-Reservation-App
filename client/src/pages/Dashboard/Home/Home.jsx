import React from 'react';
import { DashboardSidebar } from '../../../components';
import './Home.scss';

const Home = () => {
  return (
    <div className='dashboard__home'>
      <DashboardSidebar />
      <div className='dashboard__home__container'>Container</div>
    </div>
  );
};

export default Home;
