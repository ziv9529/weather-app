import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IsErrorState {
    isError: boolean;
    message: string;
}
const initialState: IsErrorState = {
    isError: false,
    message: ''
};

export const isErrorSlice = createSlice({
    name: "isError",
    initialState,
    reducers: {
        updateError: (state, action: PayloadAction<string>) => {
            state.isError = true;
            state.message = action.payload
        },
        clearError: (state) => {
            state.isError = false;
            state.message = ''
        },
    },
});

export const { updateError, clearError } = isErrorSlice.actions;

