import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    units: {
        items: [],
        status: 'loading',
    }
};

const unitsSlice = createSlice({
    name: 'units',
    initialState,
    reducers: {

    },

})

export const unitsReducer = unitsSlice.reducer; 