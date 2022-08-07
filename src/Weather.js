import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <input
            type="search"
            className="search-form"
            placeholder="Enter city name"
            autoComplete="off"
            autoFocus="on"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
        <div className="current">
          <h2>Location</h2>
          <div className="current-temp">
            00
            <span className="current-celsius">°C</span>
          </div>
          <div>Description</div>
          <div>L: 00° H:00°</div>
          <div>This is where the 7-day forecast goes</div>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
}
