import axios from "axios";
import { API_KEY } from "./api_key";

export interface Headline {
  EffectiveDate: Date;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: Date;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}
export interface Minimum {
  Value: number;
  Unit: string;
  UnitType: number;
}
export interface Maximum {
  Value: number;
  Unit: string;
  UnitType: number;
}
export interface Temperature {
  Minimum: Minimum;
  Maximum: Maximum;
}
export interface Day {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  PrecipitationIntensity: string;
}
export interface Night {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  PrecipitationIntensity: string;
}
export interface DailyForecast {
  Date: Date;
  EpochDate: number;
  Temperature: Temperature;
  Day: Day;
  Night: Night;
  Sources: string[];
  MobileLink: string;
  Link: string;
}
export interface FiveDaysWeatherRootObject {
  Headline: Headline;
  DailyForecasts: DailyForecast[];
}

const fiveDaysWeatherUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day';

export async function getFiveDaysWeatherService(location_key: string): Promise<FiveDaysWeatherRootObject> {
  const { data } = await axios.get(`${fiveDaysWeatherUrl}/${location_key}?apikey=${API_KEY}`);
  return data;
}