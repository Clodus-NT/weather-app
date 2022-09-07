import Search from './components/Search/Search';
import Forecast from './components/Forecast/Forecast';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import './App.css';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="appContainer">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
      <Forecast />
    </div>
  );
}

export default App;
