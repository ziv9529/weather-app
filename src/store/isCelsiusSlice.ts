import { createSlice } from "@reduxjs/toolkit";

interface IsCelsiusState {
    isCelsius: boolean;
}
const initialState: IsCelsiusState = {
    isCelsius: true
};

export const isCelsiusSlice = createSlice({
    name: "isCelsius",
    initialState,
    reducers: {
        updateToCelsius: (state) => {
            state.isCelsius = true;
        },
        updateToFahrenheit: (state) => {
            state.isCelsius = false;
        },
    },
});

export const { updateToCelsius, updateToFahrenheit } = isCelsiusSlice.actions;

