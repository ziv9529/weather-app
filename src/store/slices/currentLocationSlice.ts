import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "./favoritesSlice";

interface FavoritesSliceState {
    current_location: Location;
}
const initialState: FavoritesSliceState = {
    current_location: {
        key: '215854',
        location_name: 'Tel Aviv',
        currentTemperture: -999,
        currentWeather: ''
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
                fiveDaysWeather: action.payload.fiveDaysWeather
            }
        },
    },
});

export const { updateCurrentLocation } = currentLocationSlice.actions;

