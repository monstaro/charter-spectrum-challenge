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
            restaurantsList: data,
            isLoaded: true
        }))
   }
   render() {
     const { isLoaded } = this.state;
     const { restaurantsList } = this.state;
     if (!isLoaded) {
       return (<div className="restaurants-container">Please wait...</div>)
     } else {
       return (
      <div className="restaurants-container">
        {restaurantsList.map(restaurant => <Restaurant name={restaurant.name }/>)}
      </div>
    )
     }
   }
}

export default RestaurantsContainer;
