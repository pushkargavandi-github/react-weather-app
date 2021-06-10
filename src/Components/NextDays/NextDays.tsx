import React from "react";
import { Link } from "react-router-dom";
import "./NextDays.css";

const NextDays = (props) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day1Arr = props.data !== undefined ? props.data.slice(0, 8) : [];
  const day2Arr = props.data !== undefined ? props.data.slice(8, 16) : [];
  const day3Arr = props.data !== undefined ? props.data.slice(16, 24) : [];
  const day4Arr = props.data !== undefined ? props.data.slice(24, 32) : [];

  const date1 =
    day1Arr[0] !== undefined && day1Arr[0].dt_txt !== undefined
      ? day1Arr[0].dt_txt
      : "";
  let num1 = new Date(date1).getDay();
  let dayOfWeek1 = days[num1];

  const date2 =
    day2Arr[0] !== undefined && day2Arr[0].dt_txt !== undefined
      ? day2Arr[0].dt_txt
      : "";
  let num2 = new Date(date2).getDay();
  let dayOfWeek2 = days[num2];

  const date3 =
    day3Arr[0] !== undefined && day3Arr[0].dt_txt !== undefined
      ? day3Arr[0].dt_txt
      : "";
  let num3 = new Date(date3).getDay();
  let dayOfWeek3 = days[num3];

  const date4 =
    day4Arr[0] !== undefined && day4Arr[0].dt_txt !== undefined
      ? day4Arr[0].dt_txt
      : "";
  let num4 = new Date(date4).getDay();
  let dayOfWeek4 = days[num4];
  return props.data !== undefined ? (
    <div className="container">
      <div className="day-parent">
        <div className="day-of-week">{dayOfWeek1}</div>
        <div className="card-parent">
          {day1Arr !== undefined &&
            day1Arr.map((day, index) => {
              return (
                <div key={day.dt_txt !== undefined ? day.dt_txt : index}>
                  <div className="card">
                    <div>{day.dt_txt.split(" ")[1]}</div>
                    <div>{day.main.temp}&deg;C</div>
                    <div>{day.weather[0].description}</div>
                    <Link
                      className="card-link"
                      to={{
                        pathname: `/weather-details`,
                        state: { details: day },
                      }}
                    >
                      <button className="details-button">Check Details</button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="day-of-week">{dayOfWeek2}</div>
        <div className="card-parent">
          {day2Arr !== undefined &&
            day2Arr.map((day, index) => {
              return (
                <div key={day.dt_txt !== undefined ? day.dt_txt : index}>
                  <div className="card">
                    <div>{day.dt_txt.split(" ")[1]}</div>
                    <div>{day.main.temp}&deg;C</div>
                    <div>{day.weather[0].description}</div>
                    <Link
                      className="card-link"
                      to={{
                        pathname: `/weather-details`,
                        state: { details: day },
                      }}
                    >
                      <button className="details-button">Check Details</button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="day-of-week">{dayOfWeek3}</div>
        <div className="card-parent">
          {day3Arr !== undefined &&
            day3Arr.map((day, index) => {
              return (
                <div
                  className="cards-list"
                  key={day.dt_txt !== undefined ? day.dt_txt : index}
                >
                  <div className="card">
                    <div>{day.dt_txt.split(" ")[1]}</div>
                    <div>{day.main.temp}&deg;C</div>
                    <div>{day.weather[0].description}</div>
                    <Link
                      className="card-link"
                      to={{
                        pathname: `/weather-details`,
                        state: { details: day },
                      }}
                    >
                      <button className="details-button">Check Details</button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="day-of-week">{dayOfWeek4}</div>
        <div className="card-parent">
          {day4Arr !== undefined &&
            day4Arr.map((day, index) => {
              return (
                <div key={day.dt_txt !== undefined ? day.dt_txt : index}>
                  <div className="card">
                    <div>{day.dt_txt.split(" ")[1]}</div>
                    <div>{day.main.temp}&deg;C</div>
                    <div>{day.weather[0].description}</div>
                    <Link
                      className="card-link"
                      to={{
                        pathname: `/weather-details`,
                        state: { details: day },
                      }}
                    >
                      <button className="details-button">Check Details</button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default NextDays;
