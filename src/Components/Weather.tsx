import React from "react";
import Header from "./Header/Header";
import Card from "./Card/Card";
import NextDays from "./NextDays/NextDays";
import { List, CityDetails } from "./Card/CardModels";
import "./Weather.css";

const Weather = () => {
  const [dataForToday, setDataForToday] = React.useState([]);
  const [dataForNextFourDays, setDataForNextFourDays] = React.useState([]);
  const [location, setLocation] = React.useState<CityDetails>();
  const [dateForToday, setDateForToday] = React.useState("");
  React.useEffect(() => {
    async function fetchData() {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=8492977d99f7921346f9b92524744b4a&units=metric&cnt=40`
      );
      let result = await res.json();
      setLocation(result.city);
      const today = result.list.filter((item) => {
        let dateFromItem = item.dt_txt.split(" ")[0];

        let dateToday = new Date().toISOString().split("T")[0];
        setDateForToday(dateToday);
        return dateFromItem === dateToday;
      });
      setDataForToday(today);

      const nextFourDays = result.list.filter((item) => {
        let dateFromItem = item.dt_txt.split(" ")[0];
        let dateToday = new Date().toISOString().split("T")[0];
        return dateFromItem !== dateToday;
      });
      setDataForNextFourDays(nextFourDays);
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="city">
        {location !== undefined && location?.name !== undefined
          ? `${location.name}, ${location.country}. ${new Date(
              dateForToday
            ).toDateString()}`
          : "Your City"}
      </div>
      <div className="today">
        <div>
          {dataForToday !== undefined &&
            dataForToday.map((card: List, index) => {
              return (
                <div
                  className="cards-list"
                  key={card.dt_txt !== undefined ? card.dt_txt : index}
                >
                  <Card data-testid="card-component" data={card} />
                </div>
              );
            })}
        </div>
      </div>
      <div className="next-days">
        <div>
          {dataForNextFourDays !== undefined && (
            <NextDays
              data-testid="next-days-component"
              data={dataForNextFourDays}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
