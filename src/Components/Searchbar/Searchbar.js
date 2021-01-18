import React from 'react';
import './Searchbar.css';
import SearchIcon from '../../Assets/magnifying-glass.svg';

const Searchbar = (props) => {
  const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        props.searchHandler(e.target.value)
      }
  }
    return (
        <form className="searchbar-container">
            <input type="text" placeholder="Find some food" className="searchbar-input" onKeyPress={(e) => handleKeyDown(e)}/>
            <img className="searchbar-icon" src={SearchIcon} alt="Press to Search" onClick={(e) => handleKeyDown(e)}/>
        </form>
    )
}

export default Searchbar
