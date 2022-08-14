import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherMain(props) {
  return (
    <div className="current">
      <div className="location text-capitalize">{props.data.cityName}</div>
      <div className="mt-2">
        <WeatherIcon data={props.data.icon} size={55} />
        <span className="current-celsius">{props.data.temp}°</span>
      </div>
      <div className="description">{props.data.description}</div>
    </div>
  );
}
