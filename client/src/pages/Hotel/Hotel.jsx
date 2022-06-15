import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Navbar, Header, MailList, Footer } from '../../components';
import './Hotel.scss';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlide, setSlideOpen] = useState(false);

  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
    },
  ];

  const handleOpen = (idx) => {
    setSlideNumber(idx);
    setSlideOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === 'left') {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else if (direction === 'right') {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      <Navbar />
      <Header type='list' />
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
                src={photos[slideNumber].src}
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
          <div className='hotel__title'>Grand Hotel</div>
          <div className='hotel__address'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className='hotel__distance'>
            Excellent location - 500m from center
          </span>
          <span className='hotel__price__highlight'>
            Book a stay over $114 at this property an get a free airport taxi
          </span>
          <div className='hotel__images'>
            {photos.map((photo, idx) => (
              <div className='hotel__image__wrapper' key={photo.src}>
                <img
                  src={photo.src}
                  alt='Hotel Image'
                  className='hotel__image'
                  onClick={() => handleOpen(idx)}
                />
              </div>
            ))}
          </div>
          <div className='hotel__details'>
            <div className='hotel__details__texts'>
              <h1 className='hotel__details__texts__title'>
                Stay in the heart of Krakow
              </h1>
              <p className='hotel__details__texts__desc'>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className='hotel__details__price'>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Hotel;
