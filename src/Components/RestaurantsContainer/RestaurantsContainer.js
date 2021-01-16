import React, { Component } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import './RestaurantsContainer.scss';
import getRestaurants from '../../apiCalls';

class RestaurantsContainer extends Component {
   constructor(props) {
       super(props);
       this.state = {
        restaurantsList: [],
        isLoaded: false,
       }
   };
   componentDidMount = () => {
        getRestaurants()
        .then(data => this.setState({
            restaurantsList: data.sort((a, b) => a.name.localeCompare(b.name)),
            isLoaded: true
        }))
   }
   render() {
     const { isLoaded } = this.state;
     const { restaurantsList } = this.state;
     console.log(restaurantsList)
     if (!isLoaded) {
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
        {restaurantsList.map(restaurant =>
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
}

export default RestaurantsContainer;
