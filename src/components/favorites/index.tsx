import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentLocation, selectFavorites } from '../../store';
import { updateCurrentLocation } from '../../store/currentLocationSlice';
import { Location } from '../../store/favoritesSlice';
import "./index.css";

const Favorites = () => {
    const favorites = useSelector(selectFavorites);
    const navigate = useNavigate();

    return (
        <div className='main-favorite-section'>
            <h1>Favoriets Cities</h1>
            {favorites.length > 0
                ? <>
                    <div className='favorite-weather-section'>
                        {favorites.map((country: Location, index: number) => {
                            return <div onClick={() => {
                                const tempLocationData: Location = {
                                    key: country.key,
                                    location_name: country.location_name,
                                    currentTemperture: -999,
                                    currentWeather: ''
                                }
                                updateCurrentLocation(tempLocationData);
                                navigate('/');
                            }} key={index} className='weather-favorite' >
                                <h2>{country.location_name}</h2>
                                <h2>{country.currentWeather}</h2>
                                <h2>{country.currentTemperture}°</h2>
                            </div>
                        })}
                    </div>
                </>
                : <>
                    <h2>you still didnt choose your favotie cities,please <button onClick={() => { navigate('/') }} className='move-to-main'>move to main page</button> and select your favorite cities
                    </h2>
                </>
            }
        </div>
    )
}

export default Favorites