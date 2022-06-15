import React from 'react';
import './SearchItem.scss';

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
        alt='Search Result'
        className='searchItem__img'
      />
      <div className='searchItem__desc'>
        <h1 className='searchItem__desc__title'>Tower street Apartments</h1>
        <span className='searchItem__desc__distance'>500m from center</span>
        <span className='searchItem__desc__taxiOp'>Free airport taxi</span>
        <span className='searchItem__desc__subtitle'>
          Studio Apartment with Air Conditioning
        </span>
        <span className='searchItem__desc__features'>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <div className='searchItem__desc__cancelOp'>Free cancellation</div>
        <div className='searchItem__desc__cancelOp__subtitle'>
          You can cancel later, so lock in this great price today!
        </div>
      </div>
      <div className='searchItem__details'>
        <div className='searchItem__details__rating'>
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className='searchItem__details__texts'>
          <span className='searchItem__details__texts__price'>$123</span>
          <span className='searchItem__details__texts__taxOp'>
            Includes taxes and fees
          </span>
          <button className='searchItem__details__texts__button'>
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
