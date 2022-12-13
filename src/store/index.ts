import { configureStore } from "@reduxjs/toolkit";
import { currentLocationSlice } from "./currentLocationSlice";
import { favoritesSlice } from "./favoritesSlice";
import { isCelsiusSlice } from "./isCelsiusSlice";

const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        currentLocation: currentLocationSlice.reducer,
        isCelsius: isCelsiusSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

type RootState = ReturnType<typeof store.getState>;

export const selectFavorites = (state: RootState) => state.favorites.favorites;
export const selectCurrentLocation = (state: RootState) => state.currentLocation.current_location;
export const selectIsCelsius = (state: RootState) => state.isCelsius.isCelsius;

export default store;