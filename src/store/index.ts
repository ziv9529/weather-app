import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface FvoriteLocation {
    id: number;
    name: string;
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
        addFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = [
                ...state.favorites,
                {
                    id: state.favorites.length,
                    name: action.payload,
                    currentWeather: "currentWeather",
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