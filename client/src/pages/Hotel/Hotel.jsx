import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Header, MailList, Footer } from '../../components';
import { SearchContext } from '../../context/SearchContext';
import useFetch from '../../hooks/useFetch';
import './Hotel.scss';

const Hotel = () => {
  const location = useLocation();
  const hotelId = location.pathname.split('/')[2];

  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlide, setSlideOpen] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${hotelId}`);

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].startDate, dates[0].endDate);

  const handleOpen = (idx) => {
    setSlideNumber(idx);
    setSlideOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === 'left') {
      newSlideNumber =
        slideNumber === 0 ? data.photos.length - 1 : slideNumber - 1;
    } else if (direction === 'right') {
      newSlideNumber =
        slideNumber === data.photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      <Navbar />
      <Header type='list' />
      {loading ? (
        'Loading please wait'
      ) : (
        <div className='hotel__container'>
          {openSlide && (
            <div className='hotel__slider'>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className='hotel__slider__close'
                onClick={() => setSlideOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className='hotel__slider__arrow'
                onClick={() => handleMove('left')}
              />
              <div className='hotel__slider__wrapper'>
                <img
                  src={data.photos[slideNumber]}
                  alt='Slide'
                  className='hotel__slider__wrapper__img'
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className='hotel__slider__arrow'
                onClick={() => handleMove('right')}
              />
            </div>
          )}
          <div className='hotel__wrapper'>
            <button className='hotel__bookNow'>Reserve or Book Now!</button>
            <div className='hotel__title'>{data.name}</div>
            <div className='hotel__address'>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className='hotel__distance'>
              Excellent location - {data.distance}m from center
            </span>
            <span className='hotel__price__highlight'>
              Book a stay over ${data.cheapestPrice} at this property an get a
              free airport taxi
            </span>
            <div className='hotel__images'>
              {data.photos?.map((photo, idx) => (
                <div className='hotel__image__wrapper' key={idx}>
                  <img
                    src={photo}
                    alt='Hotel Image'
                    className='hotel__image'
                    onClick={() => handleOpen(idx)}
                  />
                </div>
              ))}
            </div>
            <div className='hotel__details'>
              <div className='hotel__details__texts'>
                <h1 className='hotel__details__texts__title'>{data.title}</h1>
                <p className='hotel__details__texts__desc'>{data.desc}</p>
              </div>
              <div className='hotel__details__price'>
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{' '}
                  nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Hotel;
