import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faChampagneGlasses,
  faPerson,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';

const Header = ({ type }) => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(SearchContext);

  const handleOption = (category, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [category]:
          operation === 'i' ? options[category] + 1 : options[category] - 1,
      };
    });
  };

  const handleSearch = () => {
    dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, options } });

    navigate('hotels', { state: { destination, dates, options } });
  };

  return (
    <div className='header'>
      <div
        className={
          type === 'list' ? 'header__container listMode' : 'header__container'
        }
      >
        <div className='header__list'>
          <div className='header__list__item active'>
            <FontAwesomeIcon icon={faBed} className='header__icon' />
            <span>Stays</span>
          </div>
          <div className='header__list__item'>
            <FontAwesomeIcon icon={faPlane} className='header__icon' />
            <span>Flights</span>
          </div>
          <div className='header__list__item'>
            <FontAwesomeIcon icon={faCar} className='header__icon' />
            <span>Car Rentals</span>
          </div>
          <div className='header__list__item'>
            <FontAwesomeIcon
              icon={faChampagneGlasses}
              className='header__icon'
            />
            <span>Attractions</span>
          </div>
          <div className='header__list__item'>
            <FontAwesomeIcon icon={faTaxi} className='header__icon' />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            <h1 className='header__title'>
              A lifetime of discounts? It's genius.
            </h1>
            <p className='header__description'>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Tripable account
            </p>
            {!user && (
              <button className='header__btn'>Sign In / Register</button>
            )}
            <div className='header__search'>
              <div className='header__search__item'>
                <FontAwesomeIcon icon={faBed} className='header__icon' />
                <input
                  type='text'
                  placeholder='Where are you going?'
                  className='header__search__input'
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className='header__search__item'>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className='header__icon'
                />
                <span
                  className='header__search__text'
                  onClick={() => {
                    setOpenDate(!openDate);
                    openOptions && setOpenOptions(!openOptions);
                  }}
                >{`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(
                  dates[0].endDate,
                  'MM/dd/yyyy'
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className='header__search__item__date'
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className='header__search__item'>
                <FontAwesomeIcon icon={faPerson} className='header__icon' />
                <span
                  className='header__search__text'
                  onClick={() => {
                    setOpenOptions(!openOptions);
                    openDate && setOpenDate(!openDate);
                  }}
                >
                  {`${options.adult} ${
                    options.adult === 1 ? 'adult' : 'adults'
                  } • ${options.children} ${
                    options.children === 1 ? 'child' : 'children'
                  } • ${options.room} ${options.room === 1 ? 'room' : 'rooms'}`}
                </span>
                {openOptions && (
                  <div className='header__options'>
                    <div className='header__options__item'>
                      <span className='header__options__item__text'>
                        Adults
                      </span>
                      <div className='header__options__counter'>
                        <button
                          className='header__options__counter__btn'
                          onClick={() => handleOption('adult', 'd')}
                          disabled={options.adult <= 1}
                        >
                          -
                        </button>
                        <span className='header__options__counter__number'>
                          {options.adult}
                        </span>
                        <button
                          className='header__options__counter__btn'
                          onClick={() => handleOption('adult', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='header__options__item'>
                      <span className='header__options__item__text'>
                        Children
                      </span>
                      <div className='header__options__counter'>
                        <button
                          className='header__options__counter__btn'
                          onClick={() => handleOption('children', 'd')}
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <span className='header__options__counter__number'>
                          {options.children}
                        </span>
                        <button
                          className='header__options__counter__btn'
                          onClick={() => handleOption('children', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='header__options__item'>
                      <span className='header__options__item__text'>Rooms</span>
                      <div className='header__options__counter'>
                        <button
                          className='header__options__counter__btn'
                          onClick={() => handleOption('room', 'd')}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <span className='header__options__counter__number'>
                          {options.room}
                        </span>
                        <button
                          className='header__options__counter__btn'
                          onClick={() => handleOption('room', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='header__search__item'>
                <button className='header__btn' onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>{' '}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
