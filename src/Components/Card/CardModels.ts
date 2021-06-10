export type Data = {
  city: CityDetails;
  cnt: number;
  list: List[];
};

export type CityDetails = {
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
  coord: {
    lat: number;
    long: number;
  };
};

export type List = {
  dt_txt: string;
};
