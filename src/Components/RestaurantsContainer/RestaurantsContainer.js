import React from 'react';
import Restaurant from '../Restaurant/Restaurant';
import './RestaurantsContainer.css';
import getRestaurants from '../../apiCalls';

const RestaurantsContainer = () => {
    getRestaurants()
    return (
        <div>
            Restaurants container
            <Restaurant />
        </div>
    )
}

export default RestaurantsContainer;