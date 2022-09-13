import Search from './components/Search/Search';
import Forecast from './components/Forecast/Forecast';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import './App.css';
import { useState } from 'react';

function App() {
  const [weather, setWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value;

    const weatherFetch = fetch(`${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${WEATHER_API_KEY}`)

    Promise.all([weatherFetch])
      .then(async (response) => {
        const weatherReponse = await response[0].json();

        setWeather({city: searchData.label, ...weatherReponse});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  console.log('weather: ', weather)

  return (
    <div className="appContainer">
      <Search onSearchChange={handleOnSearchChange}/>
      {weather && <CurrentWeather data={weather} />}
      <Forecast />
    </div>
  );
}

export default App;
