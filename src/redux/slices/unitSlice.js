import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../utils/axios.js';

const initialState = {
    units: {
        items: [],
        isLoading: false,
        error: null,
    }
};

export const createUnit = createAsyncThunk('units/create', async (params, { rejectWithValues }) => {
    try {
        const { data } = await axios.post('/unit/createUnit', params);

        return data;
    } catch (error) {
        return rejectWithValues(error.response.data)
    }
})

export const getUnitById = createAsyncThunk('units/getById', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('unit/getUnits');
        return data;
    } catch (error) {
        rejectWithValue(error.response.data);
    }
})

const unitsSlice = createSlice({
    name: 'units',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUnit.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(createUnit.fulfilled, (state, action) => {
                state.isLoading = false
                state.units = action.payload.unit
            })
            .addCase(createUnit.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
            .addCase(getUnitById.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getUnitById.fulfilled, (state, action) => {
                state.isLoading = false
                state.units = action.payload.units
            })
            .addCase(getUnitById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })

    }

})

export const unitsReducer = unitsSlice.reducer;
export const infoAboutUnits = (state) => (state.units.units);