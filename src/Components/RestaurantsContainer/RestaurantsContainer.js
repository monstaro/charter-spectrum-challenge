import React, { Component } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import './RestaurantsContainer.scss';
import getRestaurants from '../../apiCalls';

class RestaurantsContainer extends Component {
   constructor(props) {
       super(props);
       this.state = {
        restaurantsList: null,
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
       const { restaurants } = this.state;
       const { isLoaded } = this.state;
       if (!isLoaded) {
           console.log(restaurants)
           return <div className="restaurants-container"> Loading, please wait... </div>
       } else {
           restaurants.map(restaurant => {
               return (
                    <div className="restaurants-container">
                        <Restaurant name={restaurant.name}/>
                    </div>
               )
           })
       }
   }
}

export default RestaurantsContainer;