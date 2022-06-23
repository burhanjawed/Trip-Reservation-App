import { DashboardNavbar, DashboardSidebar } from '../../../components';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './New.scss';

const New = () => {
  return (
    <div className='dashboard__new'>
      <DashboardSidebar />
      <div className='dashboard__new__container'>
        <DashboardNavbar />
        <div className='dashboard__new__container__top'>
          <h1>Add New User</h1>
        </div>
        <div className='dashboard__new__container__bottom'>
          <div className='dashboard__new__container__bottom__left'>
            <img
              src='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              alt='User Avatar'
            />
          </div>
          <div className='dashboard__new__container__bottom__right'>
            <form>
              <div className='dashboard__new__container__bottom__right__formInput'>
                <label>
                  <DriveFolderUploadOutlinedIcon />
                </label>
                <input type='file' />
              </div>
              <div className='dashboard__new__container__bottom__right__formInput'>
                <label>Username</label>
                <input type='text' placeholder='john_doe' />
              </div>
              <div className='dashboard__new__container__bottom__right__formInput'>
                <label>First Name and Last Name</label>
                <input type='text' placeholder='John Doe' />
              </div>
              <div className='dashboard__new__container__bottom__right__formInput'>
                <label>Email</label>
                <input type='email' placeholder='john_doe@gmail.com' />
              </div>
              <div className='dashboard__new__container__bottom__right__formInput'>
                <label>Phone</label>
                <input type='text' placeholder='905-999-4444' />
              </div>
              <div className='dashboard__new__container__bottom__right__formInput'>
                <label>Password</label>
                <input type='password' />
              </div>
              <div className='dashboard__new__container__bottom__right__formInput'>
                <label>Address</label>
                <input type='text' placeholder='41 Discovery Road' />
              </div>
              <div className='dashboard__new__container__bottom__right__formInput'>
                <label>Country</label>
                <input type='text' placeholder='Canada' />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
