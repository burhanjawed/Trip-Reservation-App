import React, { useState } from 'react';
import { Navbar, Header, SearchItem } from '../../components';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './List.scss';

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <>
      <Navbar />
      <Header type={'list'} />
      <div className='list__container'>
        <div className='list__wrapper'>
          <div className='list__search'>
            <h1 className='list__search__title'>Search</h1>
            <div className='list__search__item'>
              <label>Destination</label>
              <input type='text' placeholder={destination} />
            </div>
            <div className='list__search__item'>
              <label>Check-In Date</label>
              <span
                className='list__search__date'
                onClick={() => setOpenDate(!openDate)}
              >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                date[0].endDate,
                'MM/dd/yyyy'
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className='list__search__date__selection'
                />
              )}
            </div>
            <div className='list__search__item'>
              <label>Options</label>
              <div className='list__search__options'>
                <div className='list__search__option__item'>
                  <span className='list__search__option__text'>
                    Min Price <small>(Per Night)</small>
                  </span>
                  <input
                    type='number'
                    className='list__search__option__input'
                  />
                </div>
                <div className='list__search__option__item'>
                  <span className='list__search__option__text'>
                    Max Price <small>(Per Night)</small>
                  </span>
                  <input
                    type='number'
                    className='list__search__option__input'
                  />
                </div>
                <div className='list__search__option__item'>
                  <span className='list__search__option__text'>Adult</span>
                  <input
                    type='number'
                    className='list__search__option__input'
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className='list__search__option__item'>
                  <span className='list__search__option__text'>Children</span>
                  <input
                    type='number'
                    className='list__search__option__input'
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className='list__search__option__item'>
                  <span className='list__search__option__text'>Room</span>
                  <input
                    type='number'
                    className='list__search__option__input'
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button className='search__button'>Search</button>
          </div>
          <div className='list__result'>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
