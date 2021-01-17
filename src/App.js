import './App.css';
import Header from './Components/Header/Header';
import Filter from './Components/Filter/Filter';
import RestaurantsContainer from './Components/RestaurantsContainer/RestaurantsContainer';
import {RestaurantProvider} from './RestaurantContext';
import {allStates} from './utilities.js'
function App() {
  return (
    <RestaurantProvider>
    <div className="App">
      <Header />
      <Filter type="state" options={allStates}/>
      <Filter type="genre"/>
      <RestaurantsContainer />
    </div>
    </RestaurantProvider>
  );
}

export default App;
