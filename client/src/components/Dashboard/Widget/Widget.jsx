import './Widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {
  let data;

  //TODO temporary
  const amount = 100;
  const percentage = 20;

  switch (type) {
    case 'users':
      data = {
        title: 'Users',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlineIcon
            className='dashboard__widget__right__icon'
            style={{ color: 'crimson', backgroundColor: 'rgba(255, 0, 0, 0.2' }}
          />
        ),
      };
      break;
    case 'orders':
      data = {
        title: 'Orders',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <ShoppingCartOutlinedIcon
            className='dashboard__widget__right__icon'
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218, 165, 32, 0.2',
            }}
          />
        ),
      };
      break;
    case 'earnings':
      data = {
        title: 'Earnings',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <MonetizationOnOutlinedIcon
            className='dashboard__widget__right__icon'
            style={{
              color: 'var(--green-color)',
              backgroundColor: 'rgba(0, 128, 0, 0.2',
            }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'Balance',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className='dashboard__widget__right__icon'
            style={{
              color: 'purple',
              backgroundColor: 'rgba(128, 0, 128, 0.2',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className='dashboard__widget'>
      <div className='dashboard__widget__left'>
        <span className='dashboard__widget__left__title'>{data?.title}</span>
        <span className='dashboard__widget__left__counter'>
          {data?.isMoney && '$'}
          {amount}
        </span>
        <span className='dashboard__widget__left__link'>{data?.link}</span>
      </div>
      <div className='dashboard__widget__right'>
        <div className='dashboard__widget__right__percentage positive'>
          <KeyboardArrowUpIcon /> {percentage}%
        </div>
        {data?.icon}
      </div>
    </div>
  );
};

export default Widget;
