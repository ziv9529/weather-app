import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiveDaysWeatherRootObject } from "../services/fiveDaysWeather";

export interface Location {
    key: string;
    location_name: string;
    currentTemperture: number;
    currentWeather: string;
    fiveDaysWeather?: FiveDaysWeatherRootObject
}

interface FavoritesSliceState {
    favorites: Location[];
}
const initialState: FavoritesSliceState = {
    favorites: [],
};


export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Location>) => {
            state.favorites = [
                ...state.favorites,
                {
                    key: action.payload.key,
                    location_name: action.payload.location_name,
                    currentTemperture: action.payload.currentTemperture,
                    currentWeather: action.payload.currentWeather,
                },
            ];
        },
        removeFavorite: (state, action: PayloadAction<{ _key: string }>) => {
            state.favorites = state.favorites.filter(({ key }) => key !== action.payload._key);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

