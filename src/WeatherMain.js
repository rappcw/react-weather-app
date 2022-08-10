import React from "react";

/*USES FORECAST
https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric*/

export default function WeatherMain(props) {
  return (
    <div className="current">
      <div className="location">{props.data.cityName}</div>
      <div className="current-celsius">{props.data.temp}°</div>
      <div className="description">{props.data.description}</div>
    </div>
  );
}
