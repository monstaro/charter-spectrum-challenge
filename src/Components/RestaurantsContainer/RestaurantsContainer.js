import React, { Component } from 'react';
import './RestaurantsContainer.scss';

const RestaurantsContainer = (props) => {
  const { allRestaurants } = props;
  const { selectedState } = props;
  const { selectedGenre } = props;
  const { searchedRestaurants } = props;
  const { searchTerms } = props;
  let selectedRestaurants = [];

  if (selectedState === 'All' && selectedGenre !== 'All') {
    selectedRestaurants = allRestaurants.filter(restaurant => restaurant.genre.includes(selectedGenre))
  }
  if (selectedState !== 'All' && selectedGenre === 'All') {
    selectedRestaurants = allRestaurants.filter(restaurant => restaurant.state === selectedState)
  }
  if (selectedState !== 'All' && selectedGenre !== 'All') {
    selectedRestaurants = allRestaurants.filter(restaurant => restaurant.genre.includes(selectedGenre) && restaurant.state === selectedState)
  }
  if (selectedState === 'All' && selectedGenre === 'All') {
    selectedRestaurants = allRestaurants;
  }
  // Filter by search categories
  if (searchTerms.length) {
    let newList = []
      for (let j = 0; j < searchedRestaurants.length; j++) {
        selectedRestaurants.forEach(restaurant => {
          if (restaurant.id === searchedRestaurants[j].id) {
            newList.push(restaurant)
          }
        })
      }

        selectedRestaurants = newList;


    // selectedRestaurants.reduce((newList, currentRestaurant) => {
    //
    //   return newList
    // }, [])
    // selectedRestaurants = selectedRestaurants.filter(restaurant => restaurant.id === )
  }




       if (!allRestaurants.length) {
         return (<div className="restaurants-container">Please wait...</div>)
       }
       if (!selectedRestaurants.length) {
         return (
           <div className="restaurants-container">No Matches Found.</div>
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
