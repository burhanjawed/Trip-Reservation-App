import React from 'react';
import {
  DashboardDatatable,
  DashboardNavbar,
  DashboardSidebar,
} from '../../../components';
import './List.scss';

const List = () => {
  return (
    <div className='dashboard__list'>
      <DashboardSidebar />
      <div className='dashboard__list__container'>
        <DashboardNavbar />
        <DashboardDatatable />
      </div>
    </div>
  );
};

export default List;
