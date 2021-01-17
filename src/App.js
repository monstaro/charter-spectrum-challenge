import './App.css';
import Header from './Components/Header/Header';
import Filter from './Components/Filter/Filter';
import RestaurantsContainer from './Components/RestaurantsContainer/RestaurantsContainer';
import {RestaurantProvider} from './RestaurantContext';
import {allStates} from './utilities.js'
import React, { Component } from 'react'
import getRestaurants from './apiCalls.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allRestaurants: [],
      selectedRestaurants: []
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

componentDidMount() {
    getRestaurants()
    .then(data => this.setState({
      allRestaurants: data.sort((a, b) => a.name.localeCompare(b.name)),
      selectedRestaurants: data.sort((a, b) => a.name.localeCompare(b.name))
    }))
}

clickHandler(e, type) {
  if (e.target.value === 'All') {
    console.log(this.state.allRestaurants);
    this.setState({
      selectedRestaurants: this.state.allRestaurants
    })
  }
  if (type === 'state' && e.target.value !== 'All') {
    this.setState({
      selectedRestaurants: this.state.allRestaurants.filter(restaurant => restaurant.state === e.target.value)
    })
  }
}

render() {
  return (
    <RestaurantProvider>
    <div className="App">
      <Header />
      <Filter type="state" options={allStates} clickHandler={this.clickHandler}/>
      <Filter type="genre"/>
      <RestaurantsContainer allRestaurants={this.state.allRestaurants} selectedRestaurants={this.state.selectedRestaurants}/>
    </div>
    </RestaurantProvider>
  );
}

}

export default App;
