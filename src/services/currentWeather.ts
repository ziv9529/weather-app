import axios from "axios";

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

export async function getCurrentWeatherService(location_key: number): Promise<CurrentWeatherRootObject[]> {
  const response: CurrentWeatherRootObject[] = await axios.get(`${currentWeatherUrl}/${location_key}?apikey=${process.env.API_KEY}`);
  return response;
}