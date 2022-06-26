import React, { useContext } from 'react';
import { useEffect } from 'react';
import {
  DashboardChart,
  DashboardFeatured,
  DashboardNavbar,
  DashboardSidebar,
  DashboardTable,
  DashboardWidget,
} from '../../../components';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  // const { user } = useContext(AuthContext);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user.isAdmin) {
  //     navigate('/');
  //   }
  // }, []);

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
          <DashboardTable height={400} title='Last 6 Months (Revenue)' />
        </div>
      </div>
    </div>
  );
};

export default Home;
