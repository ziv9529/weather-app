import React from 'react'
import { useSelector } from 'react-redux';
import { selectCurrentLocation, selectFavorites } from '../../store';
import { Location } from '../../store/favoritesSlice';

const Favorites = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <div>
            <h1>favoriets</h1>
            {favorites.map((country: Location) => {
                return <div style={{ border: '1px solid black' }}>
                    <h2>{country.location_name}</h2>
                    <h2>{country.currentWeather}</h2>
                    <h2>{country.currentTemperture}°</h2>
                </div>
            })}
        </div>
    )
}

export default Favorites