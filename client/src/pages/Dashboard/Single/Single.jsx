import React from 'react';
import {
  DashboardChart,
  DashboardNavbar,
  DashboardSidebar,
  DashboardTable,
} from '../../../components';
import './Single.scss';

const Single = () => {
  return (
    <div className='dashboard__single'>
      <DashboardSidebar />
      <div className='dashboard__single__container'>
        <DashboardNavbar />
        <div className='dashboard__single__container__top'>
          <div className='dashboard__single__container__top__left'>
            <div className='dashboard__single__container__top__left__editButton'>
              Edit
            </div>
            <h1 className='dashboard__single__container__top__left__title'>
              Information
            </h1>
            <div className='dashboard__single__container__top__left__item'>
              <img
                src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                alt='User Avatar'
                className='dashboard__single__container__top__left__item__img'
              />
              <div className='dashboard__single__container__top__left__item__details'>
                <h1 className='dashboard__single__container__top__left__item__details__itemTitle'>
                  Jane Doe
                </h1>
                <div className='dashboard__single__container__top__left__item__details__item'>
                  <div className='dashboard__single__container__top__left__item__details__item__container'>
                    <span className='dashboard__single__container__top__left__item__details__item__key'>
                      Email:
                    </span>
                    <span className='dashboard__single__container__top__left__item__details__item__value'>
                      janedoe@gmail.com
                    </span>
                  </div>
                  <div className='dashboard__single__container__top__left__item__details__item__container'>
                    <span className='dashboard__single__container__top__left__item__details__item__key'>
                      Phone:
                    </span>
                    <span className='dashboard__single__container__top__left__item__details__item__value'>
                      905-999-4444
                    </span>
                  </div>
                  <div className='dashboard__single__container__top__left__item__details__item__container'>
                    <span className='dashboard__single__container__top__left__item__details__item__key'>
                      Address:
                    </span>
                    <span className='dashboard__single__container__top__left__item__details__item__value'>
                      43 Garden Rd. Ontario
                    </span>
                  </div>
                  <div className='dashboard__single__container__top__left__item__details__item__container'>
                    <span className='dashboard__single__container__top__left__item__details__item__key'>
                      Country:
                    </span>
                    <span className='dashboard__single__container__top__left__item__details__item__value'>
                      Canada
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='dashboard__single__container__top__right'>
            <DashboardChart
              height={250}
              title='User Spending (Last 6 Months)'
            />
          </div>
        </div>
        <div className='dashboard__single__container__bottom'>
          <h1 className='dashboard__single__container__top__left__title'>
            Last Transactions
          </h1>
          <DashboardTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
