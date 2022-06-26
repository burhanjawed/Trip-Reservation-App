import { useState } from 'react';
import { DashboardNavbar, DashboardSidebar } from '../../../components';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './NewHotel.scss';
import { hotelInputs } from '../../../formSource';
import useFetch from '../../../hooks/useFetch';
import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebase';
import { useEffect } from 'react';

const NewHotel = () => {
  const [files, setFiles] = useState('');
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const [per, setPer] = useState(null);
  const [imgData, setImgData] = useState([]);

  const { data, loading, error } = useFetch('/rooms');

  useEffect(() => {
    const uploadFiles = async () => {
      await Promise.all(
        Object.values(files).map((file) => {
          const name =
            'images/hotels/' +
            info.name +
            '/' +
            new Date().getTime() +
            file.name;
          const storageRef = ref(storage, name);
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on(
            'state_changed',
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

              console.log('Upload is ' + progress + '% done');
              setPer(progress);

              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
                default:
                  break;
              }
            },
            (error) => {
              console.log(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setImgData((prev) => {
                  return [...prev, downloadURL];
                });
              });
            }
          );
        })
      );
    };

    files && uploadFiles();
  }, [files]);

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSelect = (e) => {
    const val = Array.from(e.target.selectedOptions, (option) => option.value);

    setRooms(val);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const newHotel = {
        ...info,
        rooms,
        photos: imgData,
      };

      await axios.post('/hotels', newHotel);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='dashboard__newHotel'>
      <DashboardSidebar />
      <div className='dashboard__newHotel__container'>
        <DashboardNavbar />
        <div className='dashboard__newHotel__container__top'>
          <h1>Add New Hotel</h1>
        </div>
        <div className='dashboard__newHotel__container__bottom'>
          <div className='dashboard__newHotel__container__bottom__left'>
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt='Hotel'
            />
          </div>
          <div className='dashboard__newHotel__container__bottom__right'>
            <form>
              <div className='dashboard__newHotel__container__bottom__right__formInput'>
                <label htmlFor='imgFile'>
                  Image:{' '}
                  <DriveFolderUploadOutlinedIcon className='dashboard__newHotel__container__bottom__right__formInput__icon' />
                </label>
                <input
                  type='file'
                  id='imgFile'
                  multiple
                  className='dashboard__newHotel__container__bottom__right__formInput__imgFile'
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              {hotelInputs?.map((input) => (
                <div
                  className='dashboard__newHotel__container__bottom__right__formInput'
                  key={input.id}
                >
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                    id={input.id}
                  />
                </div>
              ))}
              <div className='dashboard__newHotel__container__bottom__right__formInput'>
                <label>Featured</label>
                <select id='featured' onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className='dashboard__newHotel__container__bottom__right__selectRooms'>
                <label>Rooms</label>
                <select id='rooms' multiple onChange={handleSelect}>
                  {loading
                    ? 'loading'
                    : data &&
                      data.map((room) => (
                        <option value={room._id} key={room._id}>
                          {room.title}
                        </option>
                      ))}
                </select>
              </div>
              <div className='dashboard__newHotel__container__bottom__right__btn'>
                <button
                  onClick={handleClick}
                  disabled={per !== null && per < 100}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
