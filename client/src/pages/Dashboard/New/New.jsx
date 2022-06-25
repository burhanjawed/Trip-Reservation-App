import { useEffect, useState } from 'react';
import { DashboardNavbar, DashboardSidebar } from '../../../components';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebase';
import './New.scss';
import axios from 'axios';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState('');
  const [info, setInfo] = useState({});
  const [imgData, setImgData] = useState('');
  const [per, setPer] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = 'images/users/' + new Date().getTime() + file.name;
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
            setImgData(downloadURL);
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        ...info,
        img: imgData,
      };

      await axios.post('/auth/register', newUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='dashboard__new'>
      <DashboardSidebar />
      <div className='dashboard__new__container'>
        <DashboardNavbar />
        <div className='dashboard__new__container__top'>
          <h1>{title}</h1>
        </div>
        <div className='dashboard__new__container__bottom'>
          <div className='dashboard__new__container__bottom__left'>
            <img
              src={
                imgData
                  ? imgData
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt='Add New User'
            />
          </div>
          <div className='dashboard__new__container__bottom__right'>
            <form>
              <div className='dashboard__new__container__bottom__right__formInput'>
                <label htmlFor='imgFile'>
                  Image:{' '}
                  <DriveFolderUploadOutlinedIcon className='dashboard__new__container__bottom__right__formInput__icon' />
                </label>
                <input
                  type='file'
                  id='imgFile'
                  className='dashboard__new__container__bottom__right__formInput__imgFile'
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs?.map((input) => (
                <div
                  className='dashboard__new__container__bottom__right__formInput'
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
              <div className='dashboard__new__container__bottom__right__btn'>
                <button
                  disabled={per !== null && per < 100}
                  onClick={handleClick}
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

export default New;
