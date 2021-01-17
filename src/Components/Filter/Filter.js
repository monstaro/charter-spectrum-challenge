import React, { useContext } from 'react';
import {RestaurantContext} from '../../RestaurantContext';

const Filter = (props) => {
  const { type } = props;
  const { options } = props;
  const [restaurants] = useContext(RestaurantContext);
  const restaurantGenres = [];

  const populateGenres = () => {
    //go through each restaurant and split up each name by comma
    restaurants.forEach(restaurant => {
      var split = restaurant.genre.split(',')
      restaurantGenres.push(split)
    })
    console.log(restaurantGenres)
    // restaurants.reduce((categoriesList, currentCategory) => {
    //     if
    //   return categoriesList
    // }, [])
  }

  if (type === 'state') {
    return (
      <div className="filter-dropdown">
        <label for='state'>Choose a state</label>
          <select name="states">
            {
              options.map(state => {
                return (
                  <option value="state">{state}</option>
                )
              })
            }
            </select>
      </div>
    )
  }
  if (type === 'genre') {
    return (
      <div className="filter-dropdown">
      <label for='category'>Choose a category</label>
        <select name="categories">
          {
            restaurants.map(restaurant => {
              return (
                <option value="category">{restaurant.genre}</option>
              )
            })
          }
          </select>
      </div>
    )
  }
}

// This will be updated to be dynamic with states and genre, just setting placeholders now.

export default Filter
