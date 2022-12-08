// autocomplete
//  GET /locations/v1/cities/autocomplete?apikey=XZ9IIPGNvodEXZTk6BNCo7O0UNkFHXsK&q=is HTTP/1.1
//  q = is
//  apikey = XZ9IIPGNvodEXZTk6BNCo7O0UNkFHXsK
// response: 
export const autoFillResponse = [
    {
      "Version": 1,
      "Key": "318251",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Istanbul",
      "Country": {
        "ID": "TR",
        "LocalizedName": "Türkiye"
      },
      "AdministrativeArea": {
        "ID": "34",
        "LocalizedName": "Istanbul"
      }
    },
    {
      "Version": 1,
      "Key": "208194",
      "Type": "City",
      "Rank": 21,
      "LocalizedName": "Isfahan",
      "Country": {
        "ID": "IR",
        "LocalizedName": "Iran"
      },
      "AdministrativeArea": {
        "ID": "04",
        "LocalizedName": "Esfahan"
      }
    },
    {
      "Version": 1,
      "Key": "258278",
      "Type": "City",
      "Rank": 30,
      "LocalizedName": "Islamabad",
      "Country": {
        "ID": "PK",
        "LocalizedName": "Pakistan"
      },
      "AdministrativeArea": {
        "ID": "IS",
        "LocalizedName": "Islamabad"
      }
    },
    {
      "Version": 1,
      "Key": "126996",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Ismailia",
      "Country": {
        "ID": "EG",
        "LocalizedName": "Egypt"
      },
      "AdministrativeArea": {
        "ID": "IS",
        "LocalizedName": "Ismailia"
      }
    },
    {
      "Version": 1,
      "Key": "933777",
      "Type": "City",
      "Rank": 35,
      "LocalizedName": "Isolo",
      "Country": {
        "ID": "NG",
        "LocalizedName": "Nigeria"
      },
      "AdministrativeArea": {
        "ID": "LA",
        "LocalizedName": "Lagos"
      }
    },
    {
      "Version": 1,
      "Key": "110630",
      "Type": "City",
      "Rank": 41,
      "LocalizedName": "Isiro",
      "Country": {
        "ID": "CD",
        "LocalizedName": "Democratic Republic of the Congo"
      },
      "AdministrativeArea": {
        "ID": "HU",
        "LocalizedName": "Haut-Uélé"
      }
    },
    {
      "Version": 1,
      "Key": "262251",
      "Type": "City",
      "Rank": 41,
      "LocalizedName": "Isabela City",
      "Country": {
        "ID": "PH",
        "LocalizedName": "Philippines"
      },
      "AdministrativeArea": {
        "ID": "BAS",
        "LocalizedName": "Basilan"
      }
    },
    {
      "Version": 1,
      "Key": "266097",
      "Type": "City",
      "Rank": 41,
      "LocalizedName": "Isulan",
      "Country": {
        "ID": "PH",
        "LocalizedName": "Philippines"
      },
      "AdministrativeArea": {
        "ID": "SUK",
        "LocalizedName": "Sultan Kudarat"
      }
    },
    {
      "Version": 1,
      "Key": "318032",
      "Type": "City",
      "Rank": 41,
      "LocalizedName": "Isparta",
      "Country": {
        "ID": "TR",
        "LocalizedName": "Türkiye"
      },
      "AdministrativeArea": {
        "ID": "32",
        "LocalizedName": "Isparta"
      }
    },
    {
      "Version": 1,
      "Key": "170347",
      "Type": "City",
      "Rank": 43,
      "LocalizedName": "Iserlohn",
      "Country": {
        "ID": "DE",
        "LocalizedName": "Germany"
      },
      "AdministrativeArea": {
        "ID": "NW",
        "LocalizedName": "North Rhine-Westphalia"
      }
    }
  ]

// res.map((c)=>{return c.LocalizedName})
export const autofillData = ['Istanbul', 'Isfahan', 'Islamabad', 'Ismailia', 'Isolo', 'Isiro', 'Isabela City', 'Isulan', 'Isparta', 'Iserlohn']

// get Current Conditions
// GET /currentconditions/v1/318032?apikey=XZ9IIPGNvodEXZTk6BNCo7O0UNkFHXsK HTTP/1.1
// http://dataservice.accuweather.com/currentconditions/v1/318032
// apikey = XZ9IIPGNvodEXZTk6BNCo7O0UNkFHXsK
// response: 
export const currentWeatherResponse = [
    {
        "LocalObservationDateTime": "2022-12-08T13:42:00+03:00",
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
]

// 5 days 
// http://dataservice.accuweather.com/forecasts/v1/daily/5day/318032
// GET /forecasts/v1/daily/5day/318032?apikey=XZ9IIPGNvodEXZTk6BNCo7O0UNkFHXsK HTTP/1.1
// response: 
export const fiveDaysResponse = {
    "Headline": {
      "EffectiveDate": "2022-12-12T01:00:00+03:00",
      "EffectiveEpochDate": 1670796000,
      "Severity": 3,
      "Text": "Expect showery weather late Sunday night through Monday afternoon",
      "Category": "rain",
      "EndDate": "2022-12-12T19:00:00+03:00",
      "EndEpochDate": 1670860800,
      "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?lang=en-us",
      "Link": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2022-12-08T07:00:00+03:00",
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
        "Date": "2022-12-09T07:00:00+03:00",
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
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 8,
          "IconPhrase": "Dreary",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=2&lang=en-us",
        "Link": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=2&lang=en-us"
      },
      {
        "Date": "2022-12-10T07:00:00+03:00",
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
          "HasPrecipitation": false
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
        "Date": "2022-12-11T07:00:00+03:00",
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
        "Date": "2022-12-12T07:00:00+03:00",
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

  // GET /forecasts/v1/daily/5day/318032?apikey=XZ9IIPGNvodEXZTk6BNCo7O0UNkFHXsK&details=true HTTP/1.1
  // 
  export const fullFiveDaysResponse = {
    "Headline": {
      "EffectiveDate": "2022-12-10T07:00:00+03:00",
      "EffectiveEpochDate": 1670644800,
      "Severity": 3,
      "Text": "Expect showery weather Saturday morning through Sunday afternoon",
      "Category": "rain",
      "EndDate": "2022-12-11T19:00:00+03:00",
      "EndEpochDate": 1670774400,
      "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?lang=en-us",
      "Link": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2022-12-08T07:00:00+03:00",
        "EpochDate": 1670472000,
        "Sun": {
          "Rise": "2022-12-08T08:00:00+03:00",
          "EpochRise": 1670475600,
          "Set": "2022-12-08T17:39:00+03:00",
          "EpochSet": 1670510340
        },
        "Moon": {
          "Rise": "2022-12-08T17:40:00+03:00",
          "EpochRise": 1670510400,
          "Set": "2022-12-09T09:15:00+03:00",
          "EpochSet": 1670566500,
          "Phase": "Full",
          "Age": 14
        },
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
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 39,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Cold"
          },
          "Maximum": {
            "Value": 55,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Cool"
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 39,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Cold"
          },
          "Maximum": {
            "Value": 50,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Chilly"
          }
        },
        "HoursOfSun": 7.4,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 21,
            "Unit": "F",
            "UnitType": 18
          },
          "Cooling": {
            "Value": 0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 3,
            "Category": "Moderate",
            "CategoryValue": 2
          }
        ],
        "Day": {
          "Icon": 13,
          "IconPhrase": "Mostly cloudy w/ showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light",
          "ShortPhrase": "An afternoon shower in spots",
          "LongPhrase": "Turning cloudy with a shower in places this afternoon",
          "PrecipitationProbability": 40,
          "ThunderstormProbability": 8,
          "RainProbability": 40,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 2.3,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 156,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 12.7,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 65,
              "Localized": "ENE",
              "English": "ENE"
            }
          },
          "TotalLiquid": {
            "Value": 0.01,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0.01,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0.5,
          "HoursOfRain": 0.5,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 33,
          "Evapotranspiration": {
            "Value": 0.04,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 3269.5,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 8,
          "IconPhrase": "Dreary",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light",
          "ShortPhrase": "A shower early; cloudy",
          "LongPhrase": "An evening shower in places; otherwise, low clouds",
          "PrecipitationProbability": 40,
          "ThunderstormProbability": 8,
          "RainProbability": 40,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 4.6,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 152,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 11.5,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 127,
              "Localized": "SE",
              "English": "SE"
            }
          },
          "TotalLiquid": {
            "Value": 0.01,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0.01,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0.5,
          "HoursOfRain": 0.5,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 99,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=1&lang=en-us"
      },
      {
        "Date": "2022-12-09T07:00:00+03:00",
        "EpochDate": 1670558400,
        "Sun": {
          "Rise": "2022-12-09T08:01:00+03:00",
          "EpochRise": 1670562060,
          "Set": "2022-12-09T17:39:00+03:00",
          "EpochSet": 1670596740
        },
        "Moon": {
          "Rise": "2022-12-09T18:27:00+03:00",
          "EpochRise": 1670599620,
          "Set": "2022-12-10T10:08:00+03:00",
          "EpochSet": 1670656080,
          "Phase": "WaningGibbous",
          "Age": 15
        },
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
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 39,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Cold"
          },
          "Maximum": {
            "Value": 53,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Cool"
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 39,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Cold"
          },
          "Maximum": {
            "Value": 52,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Chilly"
          }
        },
        "HoursOfSun": 1.9,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 19,
            "Unit": "F",
            "UnitType": 18
          },
          "Cooling": {
            "Value": 0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 1,
            "Category": "Low",
            "CategoryValue": 1
          }
        ],
        "Day": {
          "Icon": 8,
          "IconPhrase": "Dreary",
          "HasPrecipitation": false,
          "ShortPhrase": "Low clouds",
          "LongPhrase": "Low clouds",
          "PrecipitationProbability": 23,
          "ThunderstormProbability": 0,
          "RainProbability": 23,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 4.6,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 156,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 15,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 156,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 95,
          "Evapotranspiration": {
            "Value": 0.03,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 1266.3,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 8,
          "IconPhrase": "Dreary",
          "HasPrecipitation": false,
          "ShortPhrase": "Low clouds",
          "LongPhrase": "Low clouds",
          "PrecipitationProbability": 25,
          "ThunderstormProbability": 0,
          "RainProbability": 25,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 4.6,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 160,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 13.8,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 156,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 98,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=2&lang=en-us",
        "Link": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=2&lang=en-us"
      },
      {
        "Date": "2022-12-10T07:00:00+03:00",
        "EpochDate": 1670644800,
        "Sun": {
          "Rise": "2022-12-10T08:02:00+03:00",
          "EpochRise": 1670648520,
          "Set": "2022-12-10T17:39:00+03:00",
          "EpochSet": 1670683140
        },
        "Moon": {
          "Rise": "2022-12-10T19:21:00+03:00",
          "EpochRise": 1670689260,
          "Set": "2022-12-11T10:53:00+03:00",
          "EpochSet": 1670745180,
          "Phase": "WaningGibbous",
          "Age": 16
        },
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
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 39,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Cold"
          },
          "Maximum": {
            "Value": 50,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Chilly"
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 39,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Cold"
          },
          "Maximum": {
            "Value": 49,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Chilly"
          }
        },
        "HoursOfSun": 1.6,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 17,
            "Unit": "F",
            "UnitType": 18
          },
          "Cooling": {
            "Value": 0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 1,
            "Category": "Low",
            "CategoryValue": 1
          }
        ],
        "Day": {
          "Icon": 8,
          "IconPhrase": "Dreary",
          "HasPrecipitation": false,
          "ShortPhrase": "Low clouds",
          "LongPhrase": "Low clouds",
          "PrecipitationProbability": 25,
          "ThunderstormProbability": 0,
          "RainProbability": 25,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 6.9,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 159,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 18.4,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 155,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 100,
          "Evapotranspiration": {
            "Value": 0.03,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 1213.4,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light",
          "ShortPhrase": "Cloudy with a shower or two",
          "LongPhrase": "Considerable cloudiness with a brief shower or two",
          "PrecipitationProbability": 80,
          "ThunderstormProbability": 16,
          "RainProbability": 80,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 5.8,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 153,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 16.1,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 151,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "TotalLiquid": {
            "Value": 0.04,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0.04,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 2,
          "HoursOfRain": 2,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 100,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=3&lang=en-us",
        "Link": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=3&lang=en-us"
      },
      {
        "Date": "2022-12-11T07:00:00+03:00",
        "EpochDate": 1670731200,
        "Sun": {
          "Rise": "2022-12-11T08:03:00+03:00",
          "EpochRise": 1670734980,
          "Set": "2022-12-11T17:39:00+03:00",
          "EpochSet": 1670769540
        },
        "Moon": {
          "Rise": "2022-12-11T20:18:00+03:00",
          "EpochRise": 1670779080,
          "Set": "2022-12-12T11:32:00+03:00",
          "EpochSet": 1670833920,
          "Phase": "WaningGibbous",
          "Age": 17
        },
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
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 38,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Cold"
          },
          "Maximum": {
            "Value": 50,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Chilly"
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 38,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Cold"
          },
          "Maximum": {
            "Value": 49,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Chilly"
          }
        },
        "HoursOfSun": 1.6,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 16,
            "Unit": "F",
            "UnitType": 18
          },
          "Cooling": {
            "Value": 0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 1,
            "Category": "Low",
            "CategoryValue": 1
          }
        ],
        "Day": {
          "Icon": 18,
          "IconPhrase": "Rain",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light",
          "ShortPhrase": "Occasional rain",
          "LongPhrase": "Occasional rain",
          "PrecipitationProbability": 91,
          "ThunderstormProbability": 15,
          "RainProbability": 91,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 8.1,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 154,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 21.9,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 152,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "TotalLiquid": {
            "Value": 0.33,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0.33,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 5.5,
          "HoursOfRain": 5.5,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 100,
          "Evapotranspiration": {
            "Value": 0.03,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 1219.9,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate",
          "ShortPhrase": "Cloudy, a little rain late",
          "LongPhrase": "Considerable cloudiness with a little rain late",
          "PrecipitationProbability": 75,
          "ThunderstormProbability": 18,
          "RainProbability": 75,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 6.9,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 157,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 19.6,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 156,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "TotalLiquid": {
            "Value": 0.25,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0.25,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 2,
          "HoursOfRain": 2,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 100,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=4&lang=en-us",
        "Link": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=4&lang=en-us"
      },
      {
        "Date": "2022-12-12T07:00:00+03:00",
        "EpochDate": 1670817600,
        "Sun": {
          "Rise": "2022-12-12T08:03:00+03:00",
          "EpochRise": 1670821380,
          "Set": "2022-12-12T17:39:00+03:00",
          "EpochSet": 1670855940
        },
        "Moon": {
          "Rise": "2022-12-12T21:18:00+03:00",
          "EpochRise": 1670869080,
          "Set": "2022-12-13T12:05:00+03:00",
          "EpochSet": 1670922300,
          "Phase": "WaningGibbous",
          "Age": 18
        },
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
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 39,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Cold"
          },
          "Maximum": {
            "Value": 50,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Chilly"
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 39,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Cold"
          },
          "Maximum": {
            "Value": 48,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Chilly"
          }
        },
        "HoursOfSun": 1.8,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 17,
            "Unit": "F",
            "UnitType": 18
          },
          "Cooling": {
            "Value": 0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 1,
            "Category": "Low",
            "CategoryValue": 1
          }
        ],
        "Day": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light",
          "ShortPhrase": "Cloudy with a little rain",
          "LongPhrase": "Considerable cloudiness with a little rain",
          "PrecipitationProbability": 87,
          "ThunderstormProbability": 9,
          "RainProbability": 87,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 6.9,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 165,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 19.6,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 165,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "TotalLiquid": {
            "Value": 0.27,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0.27,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 4,
          "HoursOfRain": 4,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 97,
          "Evapotranspiration": {
            "Value": 0.03,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 1281.1,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 7,
          "IconPhrase": "Cloudy",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light",
          "ShortPhrase": "Cloudy with a shower late",
          "LongPhrase": "Cloudy with a shower in spots late",
          "PrecipitationProbability": 65,
          "ThunderstormProbability": 13,
          "RainProbability": 65,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 5.8,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 164,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 16.1,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 166,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "TotalLiquid": {
            "Value": 0.06,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0.06,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 1,
          "HoursOfRain": 1,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 99,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=5&lang=en-us",
        "Link": "http://www.accuweather.com/en/tr/isparta/318032/daily-weather-forecast/318032?day=5&lang=en-us"
      }
    ]
  }
export { }