import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export interface FvoriteLocation {
    id: number;
    name: string;
    currentTemperture: number;
    currentWeather: string;
}

interface FavoritesSliceState {
    favorites: FvoriteLocation[];
}
const initialState: FavoritesSliceState = {
    favorites: [],
};
export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<{ _name: string, _currentTemperture: number, _currentWeather: string }>) => {
            state.favorites = [
                ...state.favorites,
                {
                    id: state.favorites.length,
                    name: action.payload._name,
                    currentTemperture: action.payload._currentTemperture,
                    currentWeather: action.payload._currentWeather,
                },
            ];
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter(({ id }) => id !== action.payload);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
    },
});

type RootState = ReturnType<typeof store.getState>;

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export default store;