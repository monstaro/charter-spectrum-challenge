import React from 'react';
import './Searchbar.css';

const Searchbar = () => {
    return (
        <div className="searchbar-container">
            <input type="text" placeholder="Find some food" className="searchbar-input" />
        </div>
    )
}

export default Searchbar