import React from 'react';
import './Restaurant.css';

const Restaurant = (props) => {
  const { name } = props;
    return (
        <div className="restaurant-card">
            { name }
        </div>
    )
}

export default Restaurant;
