import React from "react";

export default function FormatDate(props) {
  /*let day = props.date.getDay();*/
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (hours < 10) {
    hours = `0${minutes}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      Sunset: {hours}:{minutes}
    </div>
  );
}
