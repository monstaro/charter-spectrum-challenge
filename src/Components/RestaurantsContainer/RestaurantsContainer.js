import React, { Component } from 'react';
import './RestaurantsContainer.scss';
// import {RestaurantContext} from '../../RestaurantContext';
// import getRestaurants from '../../apiCalls.js';
// import Restaurant from './Restaurant/Restaurant';

const RestaurantsContainer = (props) => {
  const { allRestaurants } = props;
  const { selectedRestaurants } = props;

       if (!allRestaurants.length) {
         return (<div className="restaurants-container">Please wait...</div>)
       }
       if (!selectedRestaurants.length) {
         return (
           <div className="restaurants-container">There are no restaurants in your area...consider moving to a new state</div>
         )
       }
       else {
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
          {selectedRestaurants.map(restaurant =>
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
