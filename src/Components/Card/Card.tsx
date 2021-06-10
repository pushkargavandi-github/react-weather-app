import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="container">
      <div className="custom-card">
        <div>{props.data.dt_txt.split(" ")[1]}</div>
        <div className="temperature">
          Temperature: {props.data.main.temp}&deg;C
        </div>
        <div className="perception">
          Feels like: {props.data.main.feels_like}&deg;C
        </div>
        <div>Weather: {props.data.weather[0].description}</div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt={props.data.weather[0].main}
          />
        </div>
        <Link
          className="card-link"
          to={{
            pathname: `/weather-details`,
            state: { details: props.data },
          }}
        >
          <button className="btn btn-small btn-primary button">
            Check Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
