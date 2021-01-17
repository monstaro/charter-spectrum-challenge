import './App.css';
import Header from './Components/Header/Header';
import RestaurantsContainer from './Components/RestaurantsContainer/RestaurantsContainer';
import {RestaurantProvider} from './RestaurantContext';

function App() {
  return (
    <RestaurantProvider>
    <div className="App">
      <Header />
      <RestaurantsContainer />
    </div>
    </RestaurantProvider>
  );
}

export default App;
