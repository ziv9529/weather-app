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
import { DailyForecast, getFiveDaysWeatherService } from '../../services/fiveDaysWeather';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentLocation, selectFavorites } from '../../store';
import { updateCurrentLocation } from '../../store/currentLocationSlice';
import { addFavorite, Location, removeFavorite } from '../../store/favoritesSlice';
import Container from '@mui/material/Container';
import "./index.css";
import { convertFahrenheitToCelsius, weekday } from './helpers';
import Button from '@mui/material/Button';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Home = () => {
    const dispatch = useDispatch();
    const currentLocation = useSelector(selectCurrentLocation);
    const favoritesLocations = useSelector(selectFavorites);

    const [autoFillOptionsObject, setAutoFillOptionsObject] = useState<AutofillResults[]>([]);
    const [location, setLocation] = useState<string | null>(currentLocation.location_name);
    const [inputLocation, setInputLocation] = useState(currentLocation.location_name);

    // 215854
    useEffect(() => {
        const fetchCurrentWeather = async () => {
            const data = await getAutofillOptionsService(inputLocation.toLowerCase());
            const result = await getCurrentWeatherService(data[0].key);
            const fiveDaysResult = await getFiveDaysWeatherService(data[0].key);
            if (result && fiveDaysResult) {
                const locationData: Location = {
                    key: currentLocation.key,
                    location_name: currentLocation.location_name,
                    currentTemperture: result?.Temperature?.Metric?.Value,
                    currentWeather: result?.WeatherText,
                    fiveDaysWeather: fiveDaysResult
                }
                dispatch(updateCurrentLocation(locationData))
                // {
                //     _key: currentLocation.key,
                //     _location_name: currentLocation.location_name,
                //     _currentTemperture: result?.Temperature?.Metric?.Value,
                //     _currentWeather: result?.WeatherText,
                //     _fiveDaysWeather: fiveDaysResult
                // }
            }
        }
        fetchCurrentWeather().catch(console.error);
    }, [dispatch])

    useEffect(() => {
        async function fetchAutofillData() {
            const data = await getAutofillOptionsService(inputLocation.toLowerCase());
            setAutoFillOptionsObject(data);
        }
        fetchAutofillData().catch(console.error);
    }, [inputLocation])

    async function getWeather() {
        console.log(autoFillOptionsObject[0]);

        if (autoFillOptionsObject[0]) {
            const result = await getCurrentWeatherService(autoFillOptionsObject[0].key);
            const fiveDaysResult = await getFiveDaysWeatherService(autoFillOptionsObject[0].key);
            console.log(autoFillOptionsObject[0]);

            const locationData: Location = {
                key: autoFillOptionsObject[0].key,
                location_name: autoFillOptionsObject[0].location,
                currentTemperture: result?.Temperature?.Metric?.Value,
                currentWeather: result?.WeatherText,
                fiveDaysWeather: fiveDaysResult
            }
            dispatch(updateCurrentLocation(locationData))

        }

        // if (autoFillOptionsObject[0]) {
        //     const result = await getCurrentWeatherService(autoFillOptionsObject[0].key);
        //     setWeatherData(result)
        //     const fiveDaysResult = await getFiveDaysWeatherService(autoFillOptionsObject[0].key);
        //     setFiveDaysWeatherData(fiveDaysResult);
        // }

    }
    const onAddToFavorite = () => {
        const addToFavoriteData: Location = {
            key: currentLocation.key,
            location_name: currentLocation.location_name,
            // key: autoFillOptionsObject[0].key,
            // location_name: autoFillOptionsObject[0].location,
            currentTemperture: currentLocation.currentTemperture,
            currentWeather: currentLocation.currentWeather,
        }
        dispatch(addFavorite(addToFavoriteData));
    }
    const onRemoveFromFavorite = () => {
        dispatch(removeFavorite(currentLocation.key));
    }
    // async function onUpdateCurrentLocation(location_key: string) {
    //     const result = await getCurrentWeatherService(location_key);
    //     const fiveDaysResult = await getFiveDaysWeatherService(location_key);
    //     dispatch(updateCurrentLocation({
    //         _key: currentLocation.key,
    //         _location_name: currentLocation.location_name,
    //         _currentTemperture: result?.Temperature?.Metric?.Value,
    //         _currentWeather: result?.WeatherText,
    //         _fiveDaysWeather: fiveDaysResult
    //     }))
    // }

    return (
        <div className='main-section'>
            <h1 id='header-view'>Get Today's weather WORLDWIDE! </h1>
            <div className='search-section'>
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
                    options={
                        autoFillOptionsObject
                            ? autoFillOptionsObject.map((result: AutofillResults) => result.location)
                            : []
                    }
                    renderOption={(props, option) => {
                        return (
                            <li {...props} key={option}>
                                {option}
                            </li>
                        );
                    }}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Select City" />}
                />
                <IconButton disabled={!location} onClick={getWeather}  >
                    <TravelExploreIcon />
                </IconButton>
            </div>

            <div className='main-weather-section'>
                <div className='current-weather-section'>
                    <div className='weather-header'>
                        <h1>{currentLocation.location_name}</h1>
                        <h2>{currentLocation.currentWeather}, {currentLocation.currentTemperture}° C</h2>
                    </div>
                    <div>
                        {
                            favoritesLocations.map((location: Location) => location.location_name).includes(currentLocation?.location_name)
                                ? <Button onClick={onRemoveFromFavorite} variant="text">remove from favorite <FavoriteIcon className='fav-icon' /></Button>
                                : <Button onClick={onAddToFavorite} variant="text">add to favorite <FavoriteBorderIcon className='fav-icon' /></Button>
                        }
                    </div>
                </div>
                <div className='five-days-weather-section'>
                    {
                        currentLocation.fiveDaysWeather?.DailyForecasts.map((oneDayWeather: DailyForecast, index: number) => {
                            return (
                                <div className='weather-one-day' key={index}>

                                    <h3>{oneDayWeather.Date.toLocaleDateString()}</h3>

                                    {oneDayWeather.Temperature.Minimum.UnitType === 18
                                        ? <h3>
                                            {convertFahrenheitToCelsius(oneDayWeather.Temperature.Minimum.Value)}° -
                                            {convertFahrenheitToCelsius(oneDayWeather.Temperature.Maximum.Value)}° C
                                        </h3>
                                        : <h3> {oneDayWeather.Temperature.Minimum.Value} -
                                            {oneDayWeather.Temperature.Maximum.Value} ° F
                                        </h3>
                                    }
                                    <h3>{weekday[oneDayWeather.Date.getDay()]}</h3>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            {/* {currentLocation
                ? <div>
                    <div>
                        <h1>{currentLocation?.location_name}</h1>
                        {
                            favoritesLocations.map((location: Location) => location.location_name).includes(currentLocation?.location_name)
                                ? <h2>favorite</h2>
                                : <h2>not favorite</h2>
                        }
                        <button onClick={onAddToFavorite}>add to favorite</button>
                        <h2>{currentLocation?.currentWeather}</h2>
                        <h2>{currentLocation?.currentTemperture}°  </h2>
                    </div>
                    <div>
                        {currentLocation?.fiveDaysWeather?.DailyForecasts?.map((dayWeather: any, index: number) => {
                            return <div key={index}>
                                <h3>{dayWeather?.Date}</h3>
                                <h3>Between {dayWeather?.Temperature?.Minimum?.Value}° and {dayWeather?.Temperature?.Maximum?.Value}° {dayWeather?.Temperature?.Minimum?.Unit} </h3>
                            </div>
                        })}
                    </div>
                </div>
                : null} */}
        </div>
    )
}

export default Home