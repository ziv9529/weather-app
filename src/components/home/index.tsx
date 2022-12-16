import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getAutofillOptionsService } from '../../services/autofill';
import { AutofillResults } from '../../services/autofill'
import { getCurrentWeatherService } from '../../services/currentWeather';
import { DailyForecast, getFiveDaysWeatherService } from '../../services/fiveDaysWeather';

import { selectCurrentLocation, selectFavorites, selectIsCelsius, selectIsError } from '../../store';
import { updateCurrentLocation } from '../../store/slices/currentLocationSlice';
import { addFavorite, Location, removeFavorite } from '../../store/slices/favoritesSlice';

import { convertCelsiusToFahrenheit, convertFahrenheitToCelsius, weekday } from './helpers';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import "./index.css";
import { updateError } from '../../store/slices/isErrorSlice';

const Home = () => {
    const dispatch = useDispatch();
    const currentLocation = useSelector(selectCurrentLocation);
    const favoritesLocations = useSelector(selectFavorites);
    const isCelsius = useSelector(selectIsCelsius);
    const isError = useSelector(selectIsError);

    const [autoFillOptionsObject, setAutoFillOptionsObject] = useState<AutofillResults[]>([]);
    const [location, setLocation] = useState<string | null>(currentLocation.location_name);
    const [inputLocation, setInputLocation] = useState(currentLocation.location_name);
    const [inputError, setInputError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchCurrentWeather = async () => {
            setIsLoading(true);
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
                dispatch(updateCurrentLocation(locationData));
            }
        }
        fetchCurrentWeather().catch((ex) => {
            dispatch(updateError(ex.message))
        }).finally(() => {
            setIsLoading(false);
        });
    }, [dispatch])

    useEffect(() => {
        async function fetchAutofillData() {
            const data = await getAutofillOptionsService(inputLocation.toLowerCase());
            setAutoFillOptionsObject(data);
        }
        fetchAutofillData().catch((ex) => {
            dispatch(updateError(ex.message))
        })
    }, [inputLocation])

    async function getWeather() {
        if (autoFillOptionsObject[0]) {
            try {
                setIsLoading(true);
                const result = await getCurrentWeatherService(autoFillOptionsObject[0].key);
                const fiveDaysResult = await getFiveDaysWeatherService(autoFillOptionsObject[0].key);
                const locationData: Location = {
                    key: autoFillOptionsObject[0].key,
                    location_name: autoFillOptionsObject[0].location,
                    currentTemperture: result?.Temperature?.Metric?.Value,
                    currentWeather: result?.WeatherText,
                    fiveDaysWeather: fiveDaysResult
                }
                dispatch(updateCurrentLocation(locationData))
            } catch (error: any) {
                dispatch(updateError(error.message));
            } finally {
                setIsLoading(false);
            }
        }
    }
    const onAddToFavorite = () => {
        const addToFavoriteData: Location = {
            key: currentLocation.key,
            location_name: currentLocation.location_name,
            currentTemperture: currentLocation.currentTemperture,
            currentWeather: currentLocation.currentWeather,
        }
        dispatch(addFavorite(addToFavoriteData));
    }
    const onRemoveFromFavorite = () => {
        dispatch(removeFavorite(currentLocation.key));
    }
    return (
        <div className='main-section'>
            <h1 id='header-view'>Get today's weather worldwide</h1>
            <div className='search-section'>
                <div id='error-sign'>
                    {inputError ? "only english letters allowed" : null}
                </div>
                <Autocomplete
                    value={location}
                    onChange={(event: any, newValue: string | null) => {
                        setLocation(newValue);
                    }}
                    inputValue={inputLocation}
                    onInputChange={(event, newInputValue) => {
                        const letters = /[A-Za-z ]/g;
                        if (newInputValue.match(letters) || newInputValue === '') {
                            setInputLocation(newInputValue);
                            setInputError(false);
                        } else {
                            setInputError(true);
                        }
                    }}
                    id="controllable-states-demo"
                    options={
                        autoFillOptionsObject
                            ? autoFillOptionsObject.map((result: AutofillResults) => result.location)
                            : []
                    }
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Select City" />}
                />
                <IconButton disabled={!location} onClick={getWeather}  >
                    <TravelExploreIcon />
                </IconButton>
            </div>
            {
                isError.message === ''
                    ? <>
                        {
                            isLoading
                                ? <CircularProgress />
                                : <>
                                    {currentLocation && currentLocation.currentTemperture !== -999 && currentLocation.fiveDaysWeather
                                        ? <div className='main-weather-section'>
                                            <div className='current-weather-section'>
                                                <div className='weather-header'>
                                                    <h1>{currentLocation.location_name}</h1>
                                                    <h2 id='header-temp'>
                                                        {currentLocation.currentWeather},
                                                        {isCelsius === true
                                                            ? ' ' + currentLocation.currentTemperture + '° C'
                                                            : ' ' + convertCelsiusToFahrenheit(currentLocation.currentTemperture) + '° F'
                                                        }
                                                    </h2>
                                                </div>
                                                <div className='weather-header-favorite-section'>
                                                    {
                                                        favoritesLocations.map((location: Location) => location.location_name).includes(currentLocation?.location_name)
                                                            ? <Button onClick={onRemoveFromFavorite} variant="text">remove from favorite <FavoriteIcon className='fav-icon' /></Button>
                                                            : <Button onClick={onAddToFavorite} variant="text">add to favorite <FavoriteBorderIcon className='fav-icon' /></Button>
                                                    }
                                                </div>
                                            </div>
                                            <div className='five-days-weather-section'>
                                                {currentLocation.fiveDaysWeather?.DailyForecasts.map((oneDayWeather: DailyForecast, index: number) => {
                                                    const tempDate = new Date(oneDayWeather.Date)
                                                    return (
                                                        <div className='weather-one-day' key={index}>
                                                            {isCelsius === true
                                                                ? <h3>
                                                                    {convertFahrenheitToCelsius(oneDayWeather.Temperature.Minimum.Value)}° -
                                                                    {convertFahrenheitToCelsius(oneDayWeather.Temperature.Maximum.Value)}° C
                                                                </h3>
                                                                : <h3> {oneDayWeather.Temperature.Minimum.Value} -
                                                                    {oneDayWeather.Temperature.Maximum.Value} ° F
                                                                </h3>
                                                            }
                                                            <h3 className='weather-2-h'>{weekday[tempDate.getDay()]}</h3>
                                                            <h3 className='weather-3-h'>{tempDate.toLocaleDateString()}</h3>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        : 'Error, please try again'
                                    }
                                </>
                        }
                    </>
                    : <>Error: {isError.message}</>
            }
        </div>
    )
}

export default Home