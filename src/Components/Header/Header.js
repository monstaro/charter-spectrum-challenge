import React from 'react';
import './Header.scss';
import Searchbar from '../Searchbar/Searchbar.js';

const Header = (props) => {
        return (
            <div className="header-container">
                <span className="header-title-area">
                    <h1 className="header-site-title">RestaurantTier</h1>
                    <h2 className="header-sub-title">Your go-to guide to urban eats</h2>
                </span>
                <span className="header-searchbar-area">
                    <Searchbar searchHandler={props.searchHandler}/>
                </span>
            </div>
        )
}

export default Header;
