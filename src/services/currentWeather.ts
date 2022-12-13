import axios from "axios";
import { API_KEY } from "./api_key";

export interface Metric {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface Imperial {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface Temperature {
  Metric: Metric;
  Imperial: Imperial;
}

export interface CurrentWeatherRootObject {
  LocalObservationDateTime: Date;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType?: any;
  IsDayTime: boolean;
  Temperature: Temperature;
  MobileLink: string;
  Link: string;
}

const currentWeatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1';

export async function getCurrentWeatherService(location_key: string): Promise<CurrentWeatherRootObject> {
  // const { data } = await axios.get(`${currentWeatherUrl}/${location_key}?apikey=${API_KEY}`);
  // return data[0];
  return {
    "LocalObservationDateTime": new Date("2022-12-08T13:42:00+03:00"),
    "EpochTime": 1670496120,
    "WeatherText": "Fog",
    "WeatherIcon": 11,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": true,
    "Temperature": {
      "Metric": {
        "Value": 9.8,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 50,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/current-weather/318032?lang=en-us",
    "Link": "http://www.accuweather.com/en/tr/isparta/318032/current-weather/318032?lang=en-us"
  }

}