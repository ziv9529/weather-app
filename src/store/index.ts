import { applyMiddleware, combineReducers, configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiveDaysWeatherRootObject } from "../services/fiveDaysWeather";
import { currentLocationSlice } from "./currentLocationSlice";


export interface Location {
    key: string;
    location_name: string;
    currentTemperture: number;
    currentWeather: string;
    isFavorite: boolean;
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
                    isFavorite: action.payload.isFavorite
                },
            ];
        },
        removeFavorite: (state, action: PayloadAction<{ _key: string }>) => {
            state.favorites = state.favorites.filter(({ key }) => key !== action.payload._key);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;


// const rootReducer = combineReducers({
//     favorites: favoritesSlice.reducer,
//     currentLocation: currentLocationSlice.reducer
// });

const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        currentLocation: currentLocationSlice.reducer
    },
});

type RootState = ReturnType<typeof store.getState>;

export const selectFavorites = (state: RootState) => state.favorites.favorites;
export const selectCurrentLocation = (state: RootState) => state.currentLocation.current_location;

export default store;