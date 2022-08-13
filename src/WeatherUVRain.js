import React from "react";

export default function WeatherUVRain(props) {
  console.log(props);
  return (
    <div className="row row-flex">
      <div className="col col-box-small">UV: {props.data.uv}</div>
      <div className="col col-box-small">Rain: {props.data.rain}ml</div>
    </div>
  );
}
