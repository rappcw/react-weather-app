import React from "react";

export default function WeatherMain(props) {
  console.log(props);
  return (
    <div className="current">
      <div className="location">{props.data.cityName}</div>
      <div className="current-celsius">{props.data.temp}°</div>
      <div className="description">{props.data.description}</div>
    </div>
  );
}
