import React, { useState } from "react";
import WeatherMain from "./WeatherMain";
import WeatherUVRain from "./WeatherUVRain";
import WeatherWind from "./WeatherWind";
import WeatherMinMax from "./WeatherMinMax";
import WeatherWeek from "./WeatherWeek";
import WeatherSunset from "./WeatherSunset";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.userCity);

  function getThirdWeather(response) {
    setWeatherData({
      ready: true,
      min: Math.round(response.data.daily[0].temp.min),
      max: Math.round(response.data.daily[0].temp.max),
      uv: Math.round(response.data.current.uvi),
      rain: Math.round(response.data.daily[0].rain),
      daily: response.data.daily,
      icon: response.data.current.weather[0].icon,
      cityName: city,
      temp: Math.round(response.data.current.temp),
      description: response.data.daily[0].weather[0].description,
      sunset: new Date(response.data.current.sunset * 1000),
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.daily[0].wind_speed),
    });
  }

  function getWeather(response) {
    let latitude = response.data[0].lat;
    let longitude = response.data[0].lon;
    let apiKey = "442a9a6ad3254edf75193558d4248959";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getThirdWeather);
  }
  function search(city) {
    let apiKey = "442a9a6ad3254edf75193558d4248959";
    let apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(getWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="search-form col-8"
              placeholder="Enter city name"
              autoComplete="off"
              autoFocus="on"
              onChange={handleCity}
            />
            <button type="submit" className="btn btn-primary col-3">
              Search
            </button>
          </form>
          <div className="current">
            <WeatherMain data={weatherData} />
            <div className="min-max">
              <WeatherMinMax data={weatherData} />
            </div>
            <div className="container col-box-large">
              <WeatherWeek icon={weatherData.icon} data={weatherData} />
            </div>
            <div className="container container-split">
              <WeatherUVRain data={weatherData} />
            </div>
            <div className="container container-split">
              <div className="row row-flex">
                <div className="col col-box-small">
                  <WeatherSunset date={weatherData.sunset} />
                </div>
                <div className="col col-box-small">
                  <WeatherWind data={weatherData} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="white">
          This project by{" "}
          <a
            href="https://friendly-empanada-03b724.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Charmaine Rapp
          </a>{" "}
          is{" "}
          <a
            href="https://github.com/rappcw/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    );
  } else {
    search(city);
    return <div>Loading...</div>;
  }
}
