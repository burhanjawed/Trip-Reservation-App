import React from 'react';
import {
  DashboardChart,
  DashboardFeatured,
  DashboardNavbar,
  DashboardSidebar,
  DashboardTable,
  DashboardWidget,
} from '../../../components';
import './Home.scss';

const Home = () => {
  return (
    <div className='dashboard__home'>
      <DashboardSidebar />
      <div className='dashboard__home__container'>
        <DashboardNavbar />
        <div className='home__widgets'>
          <DashboardWidget type='users' />
          <DashboardWidget type='orders' />
          <DashboardWidget type='earnings' />
          <DashboardWidget type='balance' />
        </div>
        <div className='home__charts'>
          <DashboardFeatured />
          <DashboardChart />
        </div>
        <div className='dashboard__home__listContainer'>
          <div className='dashboard__home__listContainer__listTitle'>
            Latest Transactions
          </div>
          <DashboardTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
