import React from 'react'
import '../Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>

            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcons' />
            </div>
            <div className='header__nav'></div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello</span>
                <span className='header__optionLineTwo'>signin</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Return</span>
                <span className='header__optionLineTwo'>& Order</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
            <Link to='/checkout'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                </div>
            </Link>

        </div>
    )
}

export default Header
