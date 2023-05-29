import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios.js';

const initialState = {
    pricelist: [],
    isLoading: 'loading',
    error: null,
}

export const fetchPrices = createAsyncThunk('prices/fetchPrices', async () => {
    const { data } = await axios.get('/prices/getpricelist');
    return data;
})


const PriceSlice = createSlice({
    name: "prices",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPrices.pending, (state) => {
            state.error = null
            state.isLoading = 'loading'
        })
        .addCase(fetchPrices.fulfilled, (state, action) => {
            state.error = null
            state.isLoading = 'loaded'
            state.pricelist = action.payload.dataprices
        })
        .addCase(fetchPrices.rejected, (state, action) => {
            state.isLoading = 'error'
            state.error = action.payload.message
        })
    }
})

export const PriceReducer = PriceSlice.reducer;
export const PricesData = (state) => (state.prices.pricelist);