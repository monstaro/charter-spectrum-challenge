import React from 'react';
import './Searchbar.css';
import SearchIcon from '../../Assets/magnifying-glass.svg';

const Searchbar = () => {
    return (
        <div className="searchbar-container">
            <input type="text" placeholder="Find some food" className="searchbar-input" />
            <img className="searchbar-icon" src={SearchIcon} alt="Press to Search"/>
        </div>
    )
}

export default Searchbar