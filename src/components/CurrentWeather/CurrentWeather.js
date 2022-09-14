import React from "react";
import './CurrentWeather.css'

const CurrentWeather = ({data}) => {

  return (
    <div className='weatherContainer'>
      <div className='top'>
        <div>
          <p className="cityName">{data.city}</p>
          <p className="weatherDescription">{data.current.weather[0].description}</p>
        </div>
        <img alt='weather' className="weatherIcon" src={`icons/${data.current.weather[0].icon}.png`} />
      </div>
      <div className="bottom" >
        <p className="temperature">{Math.round(data.current.temp)}°F</p>
        <div className="details">
          <div className="parameterRow">
            <span className="detailsTitle">Details</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Feels like</span>
            <span className="parameterValue">{Math.round(data.current.feels_like)}°F</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Wind</span>
            <span className="parameterValue">{Math.round(data.current.wind_speed)} mph</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Humidity</span>
            <span className="parameterValue">{data.current.humidity}%</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Pressure</span>
            <span className="parameterValue">{data.current.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  )

}

export default CurrentWeather;