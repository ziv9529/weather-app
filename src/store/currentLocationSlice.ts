import { applyMiddleware, combineReducers, configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiveDaysWeatherRootObject } from "../services/fiveDaysWeather";
import { Location } from "./index"
interface FavoritesSliceState {
    current_location: Location;
}
const initialState: FavoritesSliceState = {
    current_location: {
        key: '215854',
        location_name: 'Tel Aviv',
        currentTemperture: -999,
        currentWeather: '',
        isFavorite: false
    },
};

export const currentLocationSlice = createSlice({
    name: "currentLocation",
    initialState,
    reducers: {
        updateCurrentLocation: (state, action: PayloadAction<Location>) => {
            state.current_location = {
                ...state.current_location,
                key: action.payload.key,
                location_name: action.payload.location_name,
                currentTemperture: action.payload.currentTemperture,
                currentWeather: action.payload.currentWeather,
                fiveDaysWeather: action.payload.fiveDaysWeather,
                isFavorite: action.payload.isFavorite
            }
        },
    },
});

export const { updateCurrentLocation } = currentLocationSlice.actions;

