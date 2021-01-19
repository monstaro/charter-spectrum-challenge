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
      selectedRestaurants: [],
      allGenres: [],
      selectedGenre: 'All',
      selectedState: 'All',
      searchTerms: [],
      searchedRestaurants: []
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.filterBySearchTerm = this.filterBySearchTerm.bind(this);
  }

componentDidMount() {
    getRestaurants()
    .then(data => this.setState({
      allRestaurants: data.sort((a, b) => a.name.localeCompare(b.name)),
      selectedRestaurants: data.sort((a, b) => a.name.localeCompare(b.name)),
      allGenres: data.reduce((allGenres, currentRestaurant) => {
          let currentGenres = currentRestaurant.genre.split(',');
          currentGenres.forEach(genre => {
            if (!allGenres.includes(genre)) {
              allGenres.push(genre)
            }
          })
        return allGenres;
      }, ['All']).sort()
    }))}

 clickHandler(e, type) {
  if (type === 'state' && e.target.value !== 'All') {
    this.setState({
      selectedState: e.target.value
    })
  }
  if (type === 'genre' && e.target.value !== 'All') {
    this.setState({
      selectedGenre: e.target.value
    })
  }
  if (type === 'state' && e.target.value === 'All') {
    this.setState({
      selectedState: 'All'
    })
  }
  if (type === 'genre' && e.target.value === 'All') {
    this.setState({
      selectedGenre: 'All'
    })
  }
}

  filterBySearchTerm(searchTerms) {
      this.setState({
        searchTerms: searchTerms
      })
  }


render() {
  return (
    <RestaurantProvider>
    <div className="App">
      <Header searchHandler={this.filterBySearchTerm}/>
      <div className="filters-flex-container">
      <Filter type="state" options={allStates} clickHandler={this.clickHandler}/>
      <Filter type="genre" allGenres={this.state.allGenres} clickHandler={this.clickHandler}/>
      </div>
      <RestaurantsContainer allRestaurants={this.state.allRestaurants} selectedState={this.state.selectedState} selectedGenre={this.state.selectedGenre} searchTerms={this.state.searchTerms} searchedRestaurants={this.state.searchedRestaurants}/>
    </div>
    </RestaurantProvider>
  );
}

}

export default App;
