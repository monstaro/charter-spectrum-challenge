import React, { useState, createContext } from 'react';
import getRestaurants from './apiCalls.js'

export const RestaurantContext = createContext();

export const RestaurantProvider = props => {
  const [restaurants, setRestaurants] = useState([])


  return (
    <RestaurantContext.Provider value={[restaurants, setRestaurants]}>
      {props.children}
    </RestaurantContext.Provider>
  )
}
