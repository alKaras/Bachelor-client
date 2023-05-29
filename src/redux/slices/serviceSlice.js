import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../utils/axios.js';

const initialState = {

    servid: [],
    servall: [],
    isLoading: "loading",
    error: null,
    statussend: false,
};

export const createReqService = createAsyncThunk('service/createReqServ', async (params, { rejectWithValue }) => {
    try {
        const { data } = axios.post('/service/createService', params);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const getAllServices = createAsyncThunk('service/getallServices', async () => {
    const { data } = axios.get('/service/getServices');
    return data;
})

export const getUserServices = createAsyncThunk('service/getUserServices', async (_, { rejectWithValue }) => {
    try {
        const { data } = axios.get('/service/getUserService');
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

const serviceSlice = createSlice({
    name: "services",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(createReqService.pending, (state) => {
                state.error = null
                state.isLoading = 'loading'
            })
            .addCase(createReqService.fulfilled, (state) => {
                state.error = null
                state.statussend = true
                state.isLoading = 'loaded'
            })
            .addCase(createReqService.rejected, (state, action) => {
                state.error = action.payload.message
                state.isLoading = 'error'
            })
            .addCase(getAllServices.pending, (state) => {
                state.error = null
                state.isLoading = 'loading'
            })
            .addCase(getAllServices.fulfilled, (state, action) => {
                state.error = null
                state.servall = action.payload.services
                state.isLoading = 'loaded'
            })
            .addCase(getAllServices.rejected, (state, action) => {
                state.error = action.payload.message
                state.isLoading = 'error'
            })
            .addCase(getUserServices.pending, (state) => {
                state.error = null
                state.isLoading = 'loading'
            })
            .addCase(getUserServices.fulfilled, (state, action) => {
                state.error = null
                state.servid = action.payload.services
                state.isLoading = 'loaded'
            })
            .addCase(getUserServices.rejected, (state, action) => {
                state.error = action.payload.message
                state.isLoading = 'error'
            })


    }
})

export const UserServicesInfo = (state) => (state.services.servid);
export const ServicesInfo = (state) => (state.services.servall);

export const ServiceReducer = serviceSlice.reducer;

