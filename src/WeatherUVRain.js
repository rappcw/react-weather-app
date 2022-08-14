import React from "react";

export default function WeatherUVRain(props) {
  if (isNaN(props.data.rain)) {
    return (
      <div className="row row-flex">
        <div className="col col-box-small">UV: {props.data.uv}</div>
        <div className="col col-box-small">Rain: 0ml</div>
      </div>
    );
  } else {
    return (
      <div className="row row-flex">
        <div className="col col-box-small">UV: {props.data.uv}</div>
        <div className="col col-box-small">Rain: {props.data.rain}ml</div>
      </div>
    );
  }
}
