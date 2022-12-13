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
    // const {data} = await axios.get(`${fiveDaysWeatherUrl}/${location_key}?apikey=${API_KEY}`);
    // return data;
    return {
        "Headline": {
          "EffectiveDate": new Date("2022-12-12"),
          "EffectiveEpochDate": 1670796000,
          "Severity": 3,
          "Text": "Expect showery weather late Sunday night through Monday afternoon",
          "Category": "rain",
          "EndDate": new Date("2022-12-12T19:00:00+03:00"),
          "EndEpochDate": 1670860800,
          "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?lang=en-us",
          "Link": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?lang=en-us"
        },
        "DailyForecasts": [
          {
            "Date": new Date("2022-12-08"),
            "EpochDate": 1670472000,
            "Temperature": {
              "Minimum": {
                "Value": 37,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 51,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 13,
              "IconPhrase": "Mostly cloudy w/ showers",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Light"
            },
            "Night": {
              "Icon": 8,
              "IconPhrase": "Dreary",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Light"
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=1&lang=en-us"
          },
          {
            "Date": new Date("2022-12-09"),
            "EpochDate": 1670558400,
            "Temperature": {
              "Minimum": {
                "Value": 40,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 53,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 8,
              "IconPhrase": "Dreary",
              "HasPrecipitation": false,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Light"
            },
            "Night": {
              "Icon": 8,
              "IconPhrase": "Dreary",
              "HasPrecipitation": false,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Light"
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=2&lang=en-us",
            "Link": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=2&lang=en-us"
          },
          {
            "Date": new Date("2022-12-10"),
            "EpochDate": 1670644800,
            "Temperature": {
              "Minimum": {
                "Value": 43,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 52,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 8,
              "IconPhrase": "Dreary",
              "HasPrecipitation": false,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Light"
            },
            "Night": {
              "Icon": 12,
              "IconPhrase": "Showers",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Light"
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=3&lang=en-us",
            "Link": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=3&lang=en-us"
          },
          {
            "Date": new Date("2022-12-11"),
            "EpochDate": 1670731200,
            "Temperature": {
              "Minimum": {
                "Value": 45,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 54,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 18,
              "IconPhrase": "Rain",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Light"
            },
            "Night": {
              "Icon": 12,
              "IconPhrase": "Showers",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Moderate"
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=4&lang=en-us",
            "Link": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=4&lang=en-us"
          },
          {
            "Date": new Date("2022-12-12"),
            "EpochDate": 1670817600,
            "Temperature": {
              "Minimum": {
                "Value": 43,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 53,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 12,
              "IconPhrase": "Showers",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Light"
            },
            "Night": {
              "Icon": 7,
              "IconPhrase": "Cloudy",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Light"
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=5&lang=en-us",
            "Link": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=5&lang=en-us"
          }
        ]
      }
}