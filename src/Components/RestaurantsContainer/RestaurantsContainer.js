import React, { useState } from 'react';
import './RestaurantsContainer.scss';

const RestaurantsContainer = (props) => {
  const { allRestaurants } = props;
  const { selectedState } = props;
  const { selectedGenre } = props;
  const { searchedRestaurants } = props;
  const { searchTerms } = props;
  let selectedRestaurants = [];
  let newRestaurants;
  let pagResults = [];


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

newRestaurants = selectedRestaurants;
// Paginate Results
  const lowerCasedTerms = searchTerms.map((term) => term.toLowerCase());
  const params = ['city', 'state', 'name'];

  selectedRestaurants = selectedRestaurants.filter((restaurant) =>
    lowerCasedTerms.every((lowerCasedTerm) =>
      params.some((param) => restaurant[param].toLowerCase().includes(lowerCasedTerm)),
    ),
  );
  let firstInd = 0;
  let lastInd = 10;

  const paginateResults = () => {
    pagResults = [];
  while (firstInd < lastInd) {
    if (selectedRestaurants[firstInd]) {
    pagResults.push(selectedRestaurants[firstInd])
    }
    firstInd++
  }
  if (firstInd === lastInd) {
    lastInd+=10;
  }
  console.log(pagResults)
  newRestaurants = pagResults
  console.log(newRestaurants)
  }



// Conditional Render
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
