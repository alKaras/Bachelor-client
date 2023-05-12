import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios';

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    error: null,
}

export const loginUser = createAsyncThunk('auth/login', async (params) => {
    try {
        const { data } = await axios.post('/user/login', params);
        if (data.token) {
            window.localStorage.setItem('token',)
        }
    }
    catch (error) {
        console.log(error);
    }
})

export const getUser = createAsyncThunk('auth/getUser', async () => {
    try {
        const { data } = await axios.get('/user/getUser');
        return data;
    } catch (error) {
        console.log(error);
    }
})

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.isLoading = false
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload.user
                state.token = action.payload.token
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.message
            })
            .addCase(getUser.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload?.user
                state.token = action.payload?.token
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.message
            })
    }
})

export const checkIslogin = (state) => Boolean(state.auth.token);

export const {logout} = loginSlice.actions
export default loginSlice.reducer