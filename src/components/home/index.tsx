import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { autofillData, currentWeatherResponse } from '../data';
import WeatherCard from './weatherCard';
import Autocomplete from '@mui/material/Autocomplete';

const Home = () => {
    const [location, setLocation] = useState('Isparta');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    };
    useEffect(() => {

    }, [location])
    return (
        <div>
            <h1>Home</h1>
            <div>
                <TextField id="standard-basic" label="Standard" value={location} onChange={handleChange} variant="standard"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <TravelExploreIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={autofillData}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />

            </div>
            <WeatherCard location={location} />
        </div>
    )
}

export default Home