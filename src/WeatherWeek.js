import React from "react";
import WeatherDay from "./WeatherDay";

export default function WeatherWeek(props) {
  let responseDaily = props.all.daily;

  return (
    <div className="WeatherWeek  row mt-3">
      {responseDaily.map(function (dailyForecast, index) {
        if (index < 6) {
          return (
            <span className="col-2 " key={index}>
              <WeatherDay day={dailyForecast} />
            </span>
          );
        } else {
          return <div>{null}</div>;
        }
      })}
    </div>
  );
}
