import { configureStore } from "@reduxjs/toolkit";
import { currentLocationSlice } from "./currentLocationSlice";
import { favoritesSlice } from "./favoritesSlice";

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