import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherWeek(props) {
  function day() {
    let date = new Date(props.data.daily[1].dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="WeatherWeek">
      <div className="row mt-3">
        <div className="col-2 ">
          {day()}
          <br />
          <WeatherIcon data={props.icon} size={32} />
          <div>{Math.round(props.data.daily[1].temp.max)}°</div>
        </div>
        <div className="col-2">Fri</div>
        <div className="col-2">Sat</div>
        <div className="col-2">Sun</div>
        <div className="col-2">Mon</div>
        <div className="col-2">Tue</div>
      </div>
    </div>
  );
}
