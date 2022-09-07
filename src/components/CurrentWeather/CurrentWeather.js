import React from "react";
import './CurrentWeather.css'

const CurrentWeather = () => {

  return (
    <div className='weatherContainer'>
      <div className='top'>
        <div>
          <p className="cityName">Seattle</p>
          <p className="weatherDescription">Sunny</p>
        </div>
        <img alt='weather' className="weatherIcon" src="icons/01d.png" />
      </div>
      <div className="bottom" >
        <p className="temperature">15°C</p>
        <div className="details">
          <div className="parameterRow">
            <span className="parameterLabel">Details</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Feels like</span>
            <span className="parameterValue">25°C</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Wind</span>
            <span className="parameterValue">2 m/s</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Humidity</span>
            <span className="parameterValue">25%</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Pressure</span>
            <span className="parameterValue">25 hPa</span>
          </div>
        </div>
      </div>
    </div>
  )

}

export default CurrentWeather;