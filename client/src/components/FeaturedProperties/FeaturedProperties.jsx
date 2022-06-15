import React from 'react';
import useFetch from '../../hooks/useFetch';
import './FeaturedProperties.scss';

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch('/hotels?featured=true&limit=4');

  return (
    <div className='fp'>
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          {data.length > 0 &&
            data.map((item) => (
              <div className='fp__item' key={item._id}>
                <img
                  src={item.photos[0]}
                  alt='Featured Property'
                  className='fp__img'
                />
                <span className='fp__item__name'>{item.name}</span>
                <span className='fp__item__city'>{item.city}</span>
                <span className='fp__item__price'>
                  Starting from ${item.cheapestPrice}
                </span>
                {item.rating && (
                  <div className='fp__item__rating'>
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
