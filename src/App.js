import Search from './components/Search/Search';
import Forecast from './components/Forecast/Forecast';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import './App.css';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");

    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${WEATHER_API_KEY}`)
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
