import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
    return (
        <div className = 'header'>
            <img  className = 'header__logo' src = 'http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
        
        <div className = 'header__search'>
            <input className = 'header__searchInput' type = 'text' />
             <SearchIcon className = 'header__searchIcons' />
        </div>
        <div className = 'header__nav'></div>
        <div className = 'header__option'>
        <span className = 'header__optionLineOne'>Hello</span>
        <span className = 'header__optionLineTwo'>signin</span>
        </div>
        <div className = 'header__option'>
        <span className = 'header__optionLineOne'>Return</span>
        <span className = 'header__optionLineTwo'>& Order</span>
        </div>
        <div className = 'header__option'>
        <span className = 'header__optionLineOne'>Your</span>
        <span className = 'header__optionLineTwo'>Prime</span>
        </div>
        <div className = 'header__optionBasket'>
            <ShoppingBasketIcon />
            <span className = 'header__optionLineTwo header__basketCount'>
                 0
            </span>
        </div>
        </div>
    )
}

export default Header
