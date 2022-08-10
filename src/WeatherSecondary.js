import React from "react";

/* USES ONECALL
https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric*/

export default function WeatherSecondary(props) {
  return (
    <div className="row row-flex">
      <div className="col col-box-small">UV: {props.data.uv}</div>
      <div className="col col-box-small">Rain: {props.data.rain}ml</div>
    </div>
  );
}
