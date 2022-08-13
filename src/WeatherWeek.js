import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherWeek(props) {
  return (
    <div className="WeatherWeek">
      <div className="row mt-3">
        <div className="col-2 ">
          Thu
          <WeatherIcon data="01d" size={42} />
          <div>00°</div>
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
