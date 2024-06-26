import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'; // Import auth from firebase

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png'
          alt='Amazon logo'
        />
      </Link>
      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='header_nav'>
        <Link to={!user && '/login'}>
          <div className='header_option'>
            <span className='header_optionLineOne'>Hello {user ? user.email : 'Guest'}</span>
            <span onClick={handleAuthenticaton} className='header_optionLineTwo'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className='header_option'>
            <span className='header_optionLineOne'>Return</span>
            <span className='header_optionLineTwo'>& Orders</span>
          </div>
        </Link>

        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>History</span>
        </div>

        <Link to='/checkout'>
          <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;