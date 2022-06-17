import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';
import useFetch from '../../hooks/useFetch';
import './Reserve.scss';

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);

  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);

  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());

    let list = [];

    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return list;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNum) => {
    const isFound = roomNum.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (event) => {
    const { checked, value } = event.target;

    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = () => {};

  return (
    <div className='reserve'>
      <div className='reserve__container'>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className='reserve__close'
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data?.map((item) => (
          <div className='reserve__item' key={item._id}>
            <div className='reserve__item__info'>
              <div className='reserve__item__info__title'>{item.title}</div>
              <div className='reserve__item__info__desc'>{item.desc}</div>
              <div className='reserve__item__info__max'>
                Max People: <b>{item.maxPeople}</b>
              </div>
              <div className='reserve__item__info__price'>${item.price}</div>
              {item.roomNumbers.map((roomNum) => (
                <div className='reserve__item__info__room'>
                  <label>{roomNum.number}</label>
                  <input
                    type='checkbox'
                    value={roomNum._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNum)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className='reserve__button' onClick={handleClick}>
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Reserve;
