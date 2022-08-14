import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDay(props) {
  console.log(props);

  function day() {
    let date = new Date(props.day.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="WeatherDay">
      <div>
        {day()}
        <br />
        <WeatherIcon data={props.day.weather[0].icon} size={32} />
        <div>{Math.round(props.day.temp.max)}°</div>
      </div>
    </div>
  );
}
