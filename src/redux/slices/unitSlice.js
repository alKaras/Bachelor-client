import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../utils/axios.js';

const initialState = {

    items: [],
    deletedunit: null,
    itemsall: [],
    isLoading: "loading",
    error: null,

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
        const { data } = await axios.get('/unit/getUnits');
        return data;
    } catch (error) {
        rejectWithValue(error.response.data);
    }
})

export const getUnits = createAsyncThunk('units/getUnits', async () => {
    const { data } = await axios.get('/unit/getAllUnits');
    return data;
})
export const deleteUnitById = createAsyncThunk('units/deleteUnit', async (param, { rejectWithValue }) => {
    try {
        const { data } = await axios.delete(`/unit/deleteunit/${param}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data);
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
                state.isLoading = "loading"
                state.error = null
            })
            .addCase(createUnit.fulfilled, (state, action) => {
                state.isLoading = "loaded"
            })
            .addCase(createUnit.rejected, (state, action) => {
                state.isLoading = "error"
                state.error = action.error.message
            })
            .addCase(getUnitById.pending, (state) => {
                state.isLoading = "loading"
                state.items = []
                state.error = null
            })
            .addCase(getUnitById.fulfilled, (state, action) => {
                state.isLoading = "loaded"
                state.items = action.payload.units
            })
            .addCase(getUnitById.rejected, (state, action) => {
                state.isLoading = "error"
                state.error = action.error.message
            })
            .addCase(getUnits.pending, (state) => {
                state.isLoading = "loading"
                state.error = null
            })
            .addCase(getUnits.fulfilled, (state, action) => {
                state.isLoading = "loaded"
                state.itemsall = action.payload.units
            })
            .addCase(getUnits.rejected, (state, action) => {
                state.isLoading = "error"
                state.error = action.error.message
            })
            .addCase(deleteUnitById.pending, (state) => {
                state.isLoading = "loading"
                state.error = null
            })
            .addCase(deleteUnitById.fulfilled, (state, action) => {
                state.isLoading = "loaded"
                state.deletedunit = action.payload.deletedunit
                state.error = null
            })
            .addCase(deleteUnitById.rejected, (state, action) => {
                state.isLoading = "error"
                state.error = action.payload.message
            })


    }

})

export const unitsReducer = unitsSlice.reducer;
export const infoAboutUnits = (state) => (state.units.items);
export const infoAboutAllUnits = (state) => (state.units.itemsall);
export const selectDeletedUnit = (state) => (state.units.deletedunit);