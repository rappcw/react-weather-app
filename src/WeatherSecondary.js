import React from "react";

export default function WeatherSecondary(props) {
  return (
    <div className="row row-flex">
      <div className="col col-box-small">UV: {props.data.uv}</div>
      <div className="col col-box-small">Rain: {props.data.rain}ml</div>
    </div>
  );
}
