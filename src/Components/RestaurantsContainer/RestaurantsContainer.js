import React, { useContext, useEffect } from 'react';
import './RestaurantsContainer.scss';
import {RestaurantContext} from '../../RestaurantContext';
import getRestaurants from '../../apiCalls.js';

const RestaurantsContainer = () => {
  const [restaurants, setRestaurants] = useContext(RestaurantContext);

  useEffect(() => {
     getRestaurants()
    .then(data => setRestaurants(data.sort((a, b) => a.name.localeCompare(b.name))))
  });

     if (!restaurants.length) {
       return (<div className="restaurants-container">Please wait...</div>)
     } else {
       return (
      <div className="restaurants-container">
      <table className="restaurants-table">
        <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
          <th>Phone</th>
          <th>Category</th>
          </tr>
        </thead>
        {restaurants.map(restaurant =>
          <tbody>
          <tr>
          <td>{restaurant.name}</td>
          <td>{restaurant.city}</td>
          <td>{restaurant.state}</td>
          <td>{restaurant.telephone}</td>
          <td>{restaurant.genre}</td>
          </tr>
          </tbody>
        )}
      </table>
      </div>
    )
   }
}

export default RestaurantsContainer;
