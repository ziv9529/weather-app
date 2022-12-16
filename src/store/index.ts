import { configureStore } from "@reduxjs/toolkit";
import { currentLocationSlice } from "./slices/currentLocationSlice";
import { favoritesSlice } from "./slices/favoritesSlice";
import { isCelsiusSlice } from "./slices/isCelsiusSlice";
import { isErrorSlice } from "./slices/isErrorSlice";

const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        currentLocation: currentLocationSlice.reducer,
        isCelsius: isCelsiusSlice.reducer,
        isError: isErrorSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

type RootState = ReturnType<typeof store.getState>;

export const selectFavorites = (state: RootState) => state.favorites.favorites;
export const selectCurrentLocation = (state: RootState) => state.currentLocation.current_location;
export const selectIsCelsius = (state: RootState) => state.isCelsius.isCelsius;
export const selectIsError = (state: RootState) => state.isError;

export default store;