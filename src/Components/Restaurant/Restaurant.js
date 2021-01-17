import React, { useState, useContext } from 'react';
import './Restaurant.css';
import {RestaurantContext} from '../../RestaurantContext';

const Restaurant = (props) => {
  const { name } = props;
  const value = useContext(RestaurantContext)
  console.log(value)
    return (
        <div className="restaurant-card">
        </div>
    )
}

export default Restaurant;
