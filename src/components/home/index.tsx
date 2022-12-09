import React, { useEffect, useState } from 'react'
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
const Home = () => {

    const [autoFillOptionsObject, setAutoFillOptionsObject] = useState<AutofillResults[]>([]);
    // const initialOptionsState: string[] = autoFillOptionsObject.map((result: AutofillResults) => { return result.location }) || []
    // const [autoFillOptions, setAutoFillOptions] = useState<string[]>([]);
    const [location, setLocation] = useState<string | null>('tel aviv');
    const [inputLocation, setInputLocation] = useState('tel aviv');

    useEffect(() => {
        const fetchAutofillData = async () => {
            const data = await getAutofillOptionsService(inputLocation.toLowerCase());
            setAutoFillOptionsObject(data)
        }
        fetchAutofillData().catch(console.error);
        console.log(autoFillOptionsObject);
        console.log(autoFillOptionsObject.map((result: AutofillResults) => { return result.location }));

        // if (autoFillOptionsObject) setAutoFillOptions(autoFillOptionsObject.map((result: AutofillResults) => { return result.location }))
        // console.log(autoFillOptions);

    }, [inputLocation])

    async function getWeather() {
        const result = await getCurrentWeatherService(autoFillOptionsObject[0].key)
        console.log(result)
        const fiveDaysResult = await getFiveDaysWeatherService(autoFillOptionsObject[0].key)
        console.log(fiveDaysResult)
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
                    // options={['Istanbul', 'Isfahan', 'Islamabad', 'Ismailia', 'Isolo', 'Isiro', 'Isabela City', 'Isulan', 'Isparta', 'Iserlohn']}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField key={location} {...params} label="Controllable" />}
                />
                {/* <Autocomplete
                    value={location}
                    onChange={(event: React.ChangeEvent<any>, newValue: string | null) => {
                        setLocation(newValue);
                    }}
                    inputValue={inputLocation}
                    onInputChange={(event: React.ChangeEvent<any>, newInputValue: string) => {
                        setInputLocation(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={
                        (autoFillOptions.filter((autofill: AutofillResults) => { return autofill.location }))
                    }
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Select Location" />}
                /> */}
                {/* <Autocomplete
                    value={location}
                    onChange={(event: React.ChangeEvent<any>, newValue: AutofillResults | null) => {
                        setLocation(newValue);
                    }}
                    inputValue={inputLocation}
                    onInputChange={(event: React.ChangeEvent<any>, newInputValue: string) => {
                        setInputLocation(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={
                        (autoFillOptions.filter((autofill: AutofillResults) => { return autofill.location }))
                    }
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Select Location" />}
                /> */}
                <IconButton disabled={!location} onClick={getWeather}  >
                    <TravelExploreIcon />
                </IconButton>


            </div>
            {/* <WeatherCard location={location} /> */}
        </div>
    )
}

export default Home