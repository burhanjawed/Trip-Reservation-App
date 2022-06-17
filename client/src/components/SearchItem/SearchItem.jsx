import React from 'react';
import { Link } from 'react-router-dom';
import './SearchItem.scss';

const SearchItem = ({ item }) => {
  return (
    <div className='searchItem'>
      <img
        src={item.photos[0]}
        alt='Search Result'
        className='searchItem__img'
      />
      <div className='searchItem__desc'>
        <h1 className='searchItem__desc__title'>{item.name}</h1>
        <span className='searchItem__desc__distance'>
          {item.distance}m from center
        </span>
        <span className='searchItem__desc__taxiOp'>Free airport taxi</span>
        <span className='searchItem__desc__subtitle'>
          Studio Apartment with Air Conditioning
        </span>
        <span className='searchItem__desc__features'>{item.desc}</span>
        <div className='searchItem__desc__cancelOp'>Free cancellation</div>
        <div className='searchItem__desc__cancelOp__subtitle'>
          You can cancel later, so lock in this great price today!
        </div>
      </div>
      <div className='searchItem__details'>
        {item.rating && (
          <div className='searchItem__details__rating'>
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className='searchItem__details__texts'>
          <span className='searchItem__details__texts__price'>
            ${item.cheapestPrice}
          </span>
          <span className='searchItem__details__texts__taxOp'>
            Includes taxes and fees
          </span>
          <Link to={`/hotels/${item._id}`}>
            <button className='searchItem__details__texts__button'>
              See availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
