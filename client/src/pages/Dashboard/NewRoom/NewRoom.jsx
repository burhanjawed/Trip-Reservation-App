import { useState } from 'react';
import { DashboardNavbar, DashboardSidebar } from '../../../components';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './NewRoom.scss';

const NewRoom = ({ inputs, title }) => {
  const [file, setFile] = useState('');

  return (
    <div className='dashboard__newRoom'>
      <DashboardSidebar />
      <div className='dashboard__newRoom__container'>
        <DashboardNavbar />
        <div className='dashboard__newRoom__container__top'>
          <h1>{title}</h1>
        </div>
        <div className='dashboard__newRoom__container__bottom'>
          <div className='dashboard__newRoom__container__bottom__left'>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt={title === 'Add newRoom User' ? 'User Avatar' : 'Product'}
            />
          </div>
          <div className='dashboard__newRoom__container__bottom__right'>
            <form>
              <div className='dashboard__newRoom__container__bottom__right__formInput'>
                <label htmlFor='imgFile'>
                  Image:{' '}
                  <DriveFolderUploadOutlinedIcon className='dashboard__newRoom__container__bottom__right__formInput__icon' />
                </label>
                <input
                  type='file'
                  id='imgFile'
                  className='dashboard__newRoom__container__bottom__right__formInput__imgFile'
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs?.map((input) => (
                <div
                  className='dashboard__newRoom__container__bottom__right__formInput'
                  key={input.id}
                >
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <div className='dashboard__newRoom__container__bottom__right__btn'>
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
