import React from "react";
import "./App.css";

export default function App() {
  let weatherData = {
    city: "London",
    temperature: "20 ",
    date: "9 July 2022",
    description: "Sunny",
    rain: "6",
    uv: "3 ",
    wind: "6",
    min: " 7",
    max: " 27",
    sunrise: "05:40",
    sunset: "17:54",
  };

  return (
    <div className="Search">
      <div className="container-fluid outline">
        <form>
          <div className="search-row">
            <input
              type="search"
              className="search-form"
              placeholder="Enter city name"
              autoComplete="off"
              autoFocus="on"
            />
            <button className="button button-hover button-blue">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
            <button className="button button-hover button-grey">
              <i className="fa-solid fa-magnifying-glass-location" />
            </button>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <h2>{weatherData.date}</h2>
        <div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=""
          />
          <span className="current-temp">{weatherData.temperature}</span>
          <span className="current-celsius">°C</span>

          <div className="column">
            <span>
              Rain:
              <span className="bold">{weatherData.rain}</span> ml
            </span>
            <span>
              UV:
              <span className="bold">{weatherData.uv}</span>
              <i className="fa-solid fa-circle" />
            </span>
            <span>
              Wind:
              <span className="bold">{weatherData.wind}</span>
              m/s
            </span>
          </div>

          <div className="mt-3">
            <span className="description bold">{weatherData.description}</span>
            <span className="weather-forecast-temperature">
              {weatherData.min}°min
            </span>
            <span className="weather-forecast-temperature">
              {weatherData.max}° max
            </span>
            <span>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                className="suntime"
                alt="sunrise"
              />
              {weatherData.sunrise}
            </span>
            <span>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                className="suntime"
                alt="sunset"
              />
              {weatherData.sunset}
            </span>
          </div>
          <div className="forecast-row"></div>
        </div>
      </div>
      <div>
        <a
          href="https://github.com/rappcw/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open Source code by Charmaine Rapp
        </a>
      </div>
    </div>
  );
}
