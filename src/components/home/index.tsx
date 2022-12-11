import React, { useEffect, useState, useCallback } from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { autofillData, currentWeatherResponse } from '../data';
import WeatherCard from './weatherCard';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import { getAutofillOptionsService } from '../../services/autofill';
import { AutofillResults } from '../../services/autofill'
import { getCurrentWeatherService } from '../../services/currentWeather';
import { getFiveDaysWeatherService } from '../../services/fiveDaysWeather';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, selectCurrentLocation, updateCurrentLocation } from '../../store';
const Home = () => {
    const dispatch = useDispatch();
    const currentLocation = useSelector(selectCurrentLocation);

    const [location, setLocation] = useState<string | null>(currentLocation.location_name);
    const [inputLocation, setInputLocation] = useState(currentLocation.location_name);

    const [autoFillOptionsObject, setAutoFillOptionsObject] = useState<AutofillResults[]>([]);

    const [weatherData, setWeatherData] = useState<any>({});
    const [fiveDaysWeatherData, setFiveDaysWeatherData] = useState<any>({});

    async function fetchAutofillData() {
        const data = await getAutofillOptionsService(inputLocation.toLowerCase());
        setAutoFillOptionsObject(data);
        console.log("setAutoFillOptionsObject(data) done");
    }

    useEffect(() => {
        console.log("inside first useEffect");
        const fetchCurrentWeather = async () => {
            if (autoFillOptionsObject.length > 0) {
                console.log("there is autoFillOptionsObject");
                console.log(autoFillOptionsObject);
                await getWeather();
                console.log({ weatherData });
                if (weatherData) {
                    dispatch(updateCurrentLocation({
                        _key: currentLocation.key,
                        _location_name: currentLocation.location_name,
                        _currentTemperture: weatherData?.Temperature?.Metric?.Value,
                        _currentWeather: weatherData?.WeatherText
                    }))
                }
            } else {
                console.log("not good ");

            }

        }
        fetchAutofillData().catch(console.error);
        fetchCurrentWeather().catch(console.error);

    }, [])

    useEffect(() => {
        fetchAutofillData().catch(console.error);
    }, [inputLocation])

    async function getWeather() {
        console.log("inside getWeather");
        console.log(autoFillOptionsObject);
        if (autoFillOptionsObject[0]) {
            console.log("inside getWeather if");
            const result = await getCurrentWeatherService(autoFillOptionsObject[0].key);
            setWeatherData(result)
            const fiveDaysResult = await getFiveDaysWeatherService(autoFillOptionsObject[0].key);
            setFiveDaysWeatherData(fiveDaysResult);
            console.log("get weather done");
            console.log(weatherData);

        }
    }
    const onAddToFavorite = () => {
        dispatch(addFavorite({
            _key: autoFillOptionsObject[0].key,
            _location_name: autoFillOptionsObject[0].location,
            _currentTemperture: weatherData?.Temperature?.Metric?.Value,
            _currentWeather: weatherData?.WeatherText
        }));
    }
    return (
        <div>
            <h1>Home</h1>
            <div>
                <Autocomplete
                    value={location}
                    onChange={(event: any, newValue: string | null) => {
                        setLocation(newValue);
                    }}
                    inputValue={inputLocation}
                    onInputChange={(event, newInputValue) => {
                        setInputLocation(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={autoFillOptionsObject.map((result: AutofillResults) => { return result.location }) || []}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField key={location} {...params} label="Controllable" />}
                />
                <IconButton disabled={!location} onClick={getWeather}  >
                    <TravelExploreIcon />
                </IconButton>
            </div>
            {Object.keys(fiveDaysWeatherData).length !== 0 && Object.keys(weatherData).length !== 0
                ? <div>
                    <div>
                        <h1>{location}</h1>
                        <button onClick={onAddToFavorite}>add to favorite</button>
                        <h2>{weatherData?.WeatherText}</h2>
                        <h2>{weatherData?.Temperature?.Metric?.Value} {weatherData?.Temperature?.Metric?.Unit} </h2>
                    </div>
                    <div>
                        {fiveDaysWeatherData?.DailyForecasts?.map((dayWeather: any, index: number) => {
                            return <div key={index}>
                                <h3>{dayWeather?.Date}</h3>
                                <h3>Between {dayWeather?.Temperature?.Minimum?.Value}° and {dayWeather?.Temperature?.Maximum?.Value}° {dayWeather?.Temperature?.Minimum?.Unit} </h3>
                            </div>
                        })}
                    </div>
                </div>
                : null}
        </div>
    )
}

export default Home