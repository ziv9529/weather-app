import React from 'react'
import { currentWeatherResponse } from '../../data'

const WeatherCard = (props: {
    location: string
}) => {
    return (
        <div>
            <h1>{props.location}</h1>
            <h2>{currentWeatherResponse[0].Temperature.Metric.Value} c*</h2>
        </div>

    )
}

export default WeatherCard