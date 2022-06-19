import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import './Featured.scss';

const Featured = () => {
  return (
    <div className='dashboard__featured'>
      <div className='dashboard__featured__top'>
        <h1 className='dashboard__featured__top__title'>Total Revenue</h1>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className='dashboard__featured__bottom'>
        <div className='dashboard__featured__bottom__featuredProgress'>
          <CircularProgressbar
            value={70}
            text={'70%'}
            strokeWidth={5}
            styles={buildStyles({
              // Colors
              pathColor: `rgba(0, 113, 194, 0.8)`,
              textColor: 'var(--secondary-color)',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
        <p className='dashboard__featured__bottom__title'>
          Total sales made today
        </p>
        <p className='dashboard__featured__bottom__amount'>$420</p>
        <p className='dashboard__featured__bottom__desc'>
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className='dashboard__featured__bottom__summary'>
          <div className='dashboard__featured__bottom__summary__item'>
            <div className='dashboard__featured__bottom__summary__item__title'>
              Target
            </div>
            <div className='dashboard__featured__bottom__summary__item__result negative'>
              <KeyboardArrowDownOutlinedIcon fontSize='small' />
              <div className='dashboard__featured__bottom__summary__item__result__amount'>
                $12.4k
              </div>
            </div>
          </div>
          <div className='dashboard__featured__bottom__summary__item'>
            <div className='dashboard__featured__bottom__summary__item__title'>
              Last Week
            </div>
            <div className='dashboard__featured__bottom__summary__item__result positive'>
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className='dashboard__featured__bottom__summary__item__result__amount'>
                $12.4k
              </div>
            </div>
          </div>
          <div className='dashboard__featured__bottom__summary__item'>
            <div className='dashboard__featured__bottom__summary__item__title'>
              Last Month
            </div>
            <div className='dashboard__featured__bottom__summary__item__result positive'>
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className='dashboard__featured__bottom__summary__item__result__amount'>
                $12.4k
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
