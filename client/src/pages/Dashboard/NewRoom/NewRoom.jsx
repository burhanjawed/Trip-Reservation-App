import { useState } from 'react';
import { DashboardNavbar, DashboardSidebar } from '../../../components';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './NewRoom.scss';
import { roomInputs } from '../../../formSource';
import useFetch from '../../../hooks/useFetch';
import axios from 'axios';

const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch('/hotels');

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const roomNumbers = rooms.split(',').map((room) => ({ number: room }));

    try {
      await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='dashboard__newRoom'>
      <DashboardSidebar />
      <div className='dashboard__newRoom__container'>
        <DashboardNavbar />
        <div className='dashboard__newRoom__container__top'>
          <h1>Add New Room</h1>
        </div>
        <div className='dashboard__newRoom__container__bottom'>
          <div className='dashboard__newRoom__container__bottom__right'>
            <form>
              {roomInputs?.map((input) => (
                <div
                  className='dashboard__newRoom__container__bottom__right__formInput'
                  key={input.id}
                >
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className='dashboard__newRoom__container__bottom__right__formInput'>
                <label>Rooms</label>
                <textarea
                  name=''
                  id=''
                  cols='30'
                  rows='5'
                  placeholder='Add commas between room numbers'
                  onChange={(e) => setRooms(e.target.value)}
                />
              </div>
              <div className='dashboard__newRoom__container__bottom__right__formInput'>
                <label>Choose a hotel</label>
                <select
                  id='hotelId'
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {loading
                    ? 'loading'
                    : data &&
                      data.map((hotel) => (
                        <option value={hotel._id} key={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                </select>
              </div>
              <div className='dashboard__newRoom__container__bottom__right__btn'>
                <button onClick={handleClick}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
