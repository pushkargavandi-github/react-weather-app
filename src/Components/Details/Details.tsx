import { withRouter } from "react-router-dom";

import Header from "../Header/Header";
import "./Details.css";

const Details = (props) => {
  const details = props.location.state.details;
  return (
    <div className="container">
      <Header />
      <div className="time">
        Weather at {new Date(details.dt_txt.split(" ")[0]).toDateString()}{" "}
        {details.dt_txt.split(" ")[1]}
      </div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${details.weather[0].icon}@4x.png`}
          alt={details.weather[0].main}
        />
      </div>
      <div className="tile-parent">
        <div className="tile">Current weather: {details.weather[0].main}</div>
        <div className="tile">
          Description: {details.weather[0].description}
        </div>
        <div className="tile">
          The high will be {details.main.temp_max}&deg;C and the low will be{" "}
          {details.main.temp_min}&deg;C
        </div>
        <div className="tile">Humidity: {details.main.humidity}%</div>
        <div className="tile">
          Cloudiness:
          {details.clouds.all < 40
            ? " Scattered Clouds"
            : details.clouds.all > 40 && details.clouds.all < 60
            ? " Partly Cloudy"
            : details.clouds.all > 60 && details.clouds.all < 80
            ? " Mostly Cloudy"
            : " Very Cloudy"}
        </div>
        <div className="tile">
          Rain in mm: {details.rain[Object.keys(details.rain)[0]]}
        </div>
        <div className="tile">Visibility(kms): {details.visibility / 1000}</div>
        <div className="tile">Wind speed(metres/sec): {details.wind.speed}</div>
      </div>
    </div>
  );
};

export default withRouter(Details);
