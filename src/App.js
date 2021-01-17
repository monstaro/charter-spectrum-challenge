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
  }

  componentDidMount() {
    getRestaurants()
    .then(data => this.setState({
      allRestaurants: data.sort((a, b) => a.name.localeCompare(b.name))
    }))
    }

render() {
  return (
    <RestaurantProvider>
    <div className="App">
      <Header />
      <Filter type="state" options={allStates}/>
      <Filter type="genre"/>
      <RestaurantsContainer allRestaurants={this.state.allRestaurants} selectedRestaurants={this.state.selectedRestaurants}/>
    </div>
    </RestaurantProvider>
  );
}

}

export default App;
