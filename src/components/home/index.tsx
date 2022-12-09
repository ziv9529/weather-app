import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { autofillData, currentWeatherResponse } from '../data';
import WeatherCard from './weatherCard';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import { getAutofillOptionsService } from '../../services/autofill';

const Home = () => {
    const [inputLocation, setInputLocation] = useState<string>('');
    const [autoFillData, setAutoFillData] = useState<string[]>([]);
    const [location, setLocation] = useState<string | null>(autofillData[0]);

    useEffect(() => {
        const fetchAutofillData = async () => {
            const data = await getAutofillOptionsService(inputLocation);
            // setAutoFillData(data)
        }
        const result = fetchAutofillData().catch(console.error)
    }, [inputLocation])

    return (
        <div>
            <h1>Home</h1>
            <div>
                <Autocomplete
                    value={location}
                    onChange={(event: React.ChangeEvent<any>, newValue: string | null) => {
                        setLocation(newValue);
                    }}
                    inputValue={inputLocation}
                    onInputChange={(event: React.ChangeEvent<any>, newInputValue: string) => {
                        setInputLocation(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={autofillData}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Select Location" />}
                />
                <IconButton disabled={!location}  >
                    <TravelExploreIcon />
                </IconButton>


            </div>
            {/* <WeatherCard location={location} /> */}
        </div>
    )
}

export default Home