import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
      <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png'></img>

      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        <SearchIcon className='header_searchIcon'/>
        </div>

      <div className='header_nav'>
        <div className='header_option'>
            <span className='header_optionLineOne'>Hello "name here"</span>
            <span className='header_optionLineTwo'>Sign in</span>
        </div>

        <div className='header_option'>
            <span className='header_optionLineOne'>Return</span>
            <span className='header_optionLineTwo'>& Orders</span>           
        </div>

        <div className='header_option'>
            <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>History</span>
        </div>

        <div className='header_optionBasket'>
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className='header_optionLineTwo header_basketCount'>0</span>
        </div>

      </div>      
    </div>
  )
}

export default Header