import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Location {
    key: string;
    location_name: string;
    currentTemperture: number;
    currentWeather: string;
    isFavorite:boolean;
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
        addFavorite: (state, action: PayloadAction<{ _key: string, _location_name: string, _currentTemperture: number, _currentWeather: string }>) => {
            state.favorites = [
                ...state.favorites,
                {
                    key: action.payload._key,
                    location_name: action.payload._location_name,
                    currentTemperture: action.payload._currentTemperture,
                    currentWeather: action.payload._currentWeather,
                    isFavorite:true
                },
            ];
        },
        removeFavorite: (state, action: PayloadAction<{ _key: string }>) => {
            state.favorites = state.favorites.filter(({ key }) => key !== action.payload._key);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const currentLocationSlice = createSlice({
    name: "currentLocation",
    initialState: {
        key: '215854',
        location_name: 'Tel Aviv',
        currentTemperture: -999,
        currentWeather: '',
        isFavorite:false
    } as Location,
    reducers: {
        updateCurrentLocation: (state, action: PayloadAction<{ _key: string, _location_name: string, _currentTemperture: number, _currentWeather: string }>) => {
            state = {
                ...state,
                key: action.payload._key,
                location_name: action.payload._location_name,
                currentTemperture: action.payload._currentTemperture,
                currentWeather: action.payload._currentWeather
            }
        },
    },
});

export const { updateCurrentLocation } = currentLocationSlice.actions;

const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        currentLocation: currentLocationSlice.reducer,
    },
});

type RootState = ReturnType<typeof store.getState>;

export const selectFavorites = (state: RootState) => state.favorites.favorites;
export const selectCurrentLocation = (state: RootState) => state.currentLocation;

export default store;