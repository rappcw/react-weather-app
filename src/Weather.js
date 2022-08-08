import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [weatherData1, setWeatherData1] = useState({});
  let [weatherData2, setWeatherData2] = useState({ ready: false });

  function getWeather(response) {
    let latitude = response.data[0].lat;
    let longitude = response.data[0].lon;
    let apiKey = "442a9a6ad3254edf75193558d4248959";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getSecondWeather);
    let apiUrl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl2).then(getThirdWeather);
  }

  function getSecondWeather(response) {
    setWeatherData1({
      cityName: response.data.city.name,
      temp: Math.round(response.data.list[0].main.temp),
      description: response.data.list[0].weather[0].description,
      sunset: response.data.city.sunset,
      wind: Math.round(response.data.list[0].wind.speed),
    });
  }

  function getThirdWeather(response) {
    console.log(response);
    setWeatherData2({
      ready: true,
      min: Math.round(response.data.daily[0].temp.min),
      max: Math.round(response.data.daily[0].temp.max),
      uv: Math.round(response.data.current.uvi),
      rain: Math.round(response.data.daily[0].rain),
    });
    /*setReady(true);*/
  }

  if (weatherData2.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="current">
            <div className="location">{weatherData1.cityName}</div>
            <div className="current-celsius">{weatherData1.temp}°</div>
            <div className="description">{weatherData1.description}</div>
            <div className="min-max">
              L:{weatherData2.min}° H:{weatherData2.max}°
            </div>

            <div className="container col-box-large">
              <div className="row mt-3">
                <div className="col-2 ">
                  Thu
                  <div>sun</div>
                  <div>00°</div>
                </div>
                <div className="col-2">Fri</div>
                <div className="col-2">Sat</div>
                <div className="col-2">Sun</div>
                <div className="col-2">Mon</div>
                <div className="col-2">Tue</div>
              </div>
            </div>

            <div className="container container-split">
              <div className="row row-flex">
                <div className="uv col-6 col-box-small">{weatherData2.uv}</div>
                <div className="sunset col-6 col-box-small">
                  {weatherData1.sunset}
                </div>
              </div>
            </div>
            <div className="container container-split">
              <div className="row row-flex">
                <div className="wind col-6 col-box-small">
                  {weatherData1.wind}km/h
                </div>
                <div className="rain col-6 col-box-small">
                  {weatherData2.rain}ml
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "442a9a6ad3254edf75193558d4248959";
    let city = `Perth`;
    let apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(getWeather);
    console.log(apiUrl);
    return (
      <div>
        <form>
          <input
            type="search"
            className="search-form col-8"
            placeholder="Enter city name"
            autoComplete="off"
            autoFocus="on"
          />
          <button type="submit" className="btn btn-primary col-3">
            Search
          </button>
        </form>
        <footer>
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
  }
}
