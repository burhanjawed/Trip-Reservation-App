import React from 'react';
import {
  DashboardDatatable,
  DashboardNavbar,
  DashboardSidebar,
} from '../../../components';
import './List.scss';

const List = ({ columns, title }) => {
  return (
    <div className='dashboard__list'>
      <DashboardSidebar />
      <div className='dashboard__list__container'>
        <DashboardNavbar />
        <DashboardDatatable columns={columns} title={title} />
      </div>
    </div>
  );
};

export default List;
