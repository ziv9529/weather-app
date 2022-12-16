import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectFavorites, selectIsCelsius, selectIsError } from '../../store';
import { updateCurrentLocation } from '../../store/slices/currentLocationSlice';
import { Location } from '../../store/slices/favoritesSlice';

import { convertCelsiusToFahrenheit } from '../home/helpers';

import "./index.css";

const Favorites = () => {
    const favorites = useSelector(selectFavorites);
    const isCelsius = useSelector(selectIsCelsius);
    const isError = useSelector(selectIsError);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className='main-favorite-section'>
            <h1>Favoriets cities</h1>
            {
                isError.message === ''
                    ? <>
                        {favorites.length > 0
                            ? <>
                                <div className='favorite-weather-section'>
                                    <div className="favorite-city">
                                        {
                                            favorites.map((location: Location, index: number) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className='weather-one-favorite'
                                                        onClick={() => {
                                                            const tempLocationData: Location = {
                                                                key: location.key,
                                                                location_name: location.location_name,
                                                                currentTemperture: location.currentTemperture,
                                                                currentWeather: location.currentWeather
                                                            }
                                                            dispatch(updateCurrentLocation(tempLocationData));
                                                            navigate('/');
                                                        }}
                                                    >
                                                        <p className='click_for_more'>click for more</p>
                                                        <h3>{location.location_name}</h3>
                                                        <h3>{location.currentWeather},</h3>
                                                        <h3>{isCelsius ? location.currentTemperture + ' ° C' : convertCelsiusToFahrenheit(location.currentTemperture) + ' ° F'}</h3>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </>
                            : <>
                                <h2 id='no-favorites'>You have not selected favorites cities yet, please <button onClick={() => { navigate('/') }} className='move-to-main'>move to the main page</button> and select your favorite cities</h2>
                            </>
                        }
                    </>
                    : <>Error: {isError.message}</>
            }
        </div>
    )
}

export default Favorites