import React from "react";

export default function WeatherMinMax(props) {
  return (
    <div>
      L:{props.data.min}° H:{props.data.max}°
    </div>
  );
}
