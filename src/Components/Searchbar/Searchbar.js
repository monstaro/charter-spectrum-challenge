import React, { useState } from 'react';
import './Searchbar.css';
import SearchIcon from '../../Assets/magnifying-glass.svg';

const Searchbar = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        props.searchHandler(e.target.value.split(' '))
      }
      if (e.type === 'click') {
        props.searchHandler(searchTerm)
      }
  }

  const handleDelete = (e) => {
    if (e.target.value === '') {
      props.searchHandler([])
    }
  }
    return (
        <form className="searchbar-container">
            <input type="text" placeholder="Find some food" className="searchbar-input" onChange={(e) => setSearchTerm(e.target.value.split(' '))} onKeyPress={(e) => handleKeyDown(e)} onKeyUp={(e) => handleDelete(e)}/>
            <img className="searchbar-icon" src={SearchIcon} alt="Press to Search" onClick={(e) => handleKeyDown(e)}/>
        </form>
    )
}

export default Searchbar
