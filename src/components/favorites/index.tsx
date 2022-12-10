import React from 'react'
import { useSelector } from 'react-redux';
import { Location, selectFavorites } from '../../store';

const Favorites = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <div>
            <h1>favoriets</h1>
            {favorites.map((country: Location) => {
                return <div style={{ border: '1px solid black' }}>
                    <h2>{country.name}</h2>
                    <h2>{country.currentWeather}</h2>
                    <h2>{country.currentTemperture}°</h2>
                </div>
            })}
        </div>
    )
}

export default Favorites