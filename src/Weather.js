import React, { useState } from "react";
import WeatherMain from "./WeatherMain";
import WeatherSecondary from "./WeatherSecondary";
import WeatherTertiary from "./WeatherTertiary";
import WeatherMinMax from "./WeatherMinMax";
import WeatherWeek from "./WeatherWeek";
import FormatDate from "./FormatDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData1, setWeatherData1] = useState({ ready: false });
  let [weatherData2, setWeatherData2] = useState({ ready: false });
  let [city, setCity] = useState(props.userCity);

  function getThirdWeather(response) {
    setWeatherData2({
      ready: true,
      min: Math.round(response.data.daily[0].temp.min),
      max: Math.round(response.data.daily[0].temp.max),
      uv: Math.round(response.data.current.uvi),
      rain: Math.round(response.data.daily[0].rain),
    });
  }
  function getSecondWeather(response) {
    setWeatherData1({
      ready: true,
      cityName: response.data.city.name,
      temp: Math.round(response.data.list[0].main.temp),
      description: response.data.list[0].weather[0].description,
      sunset: new Date(response.data.city.sunset * 1000),
      wind: Math.round(response.data.list[0].wind.speed),
    });
  }

  function getWeather(response) {
    let latitude = response.data[0].lat;
    let longitude = response.data[0].lon;
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getSecondWeather);
    console.log(apiUrl);
    let apiUrl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl2).then(getThirdWeather);
    console.log(apiUrl);
  }
  function search(city) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
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

  if (weatherData2.ready) {
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
            <WeatherMain data={weatherData1} />
            <div className="min-max">
              <WeatherMinMax data={weatherData2} />
            </div>
            <div className="container col-box-large">
              <WeatherWeek />
            </div>
            <div className="container container-split">
              <WeatherSecondary data={weatherData2} />
            </div>
            <div className="container container-split">
              <div className="row row-flex">
                <div className="col col-box-small">
                  <FormatDate date={weatherData1.sunset} />
                </div>
                <div className="col col-box-small">
                  <WeatherTertiary data={weatherData1} />
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
