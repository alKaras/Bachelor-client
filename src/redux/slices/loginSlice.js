import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios.js';

const initialState = {
    user: [],
    token: null,
    adminrole: false,
    isLoading: false,
    error: null,
}

export const loginUser = createAsyncThunk('auth/loginUser', async (params, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/user/login', params);
        if (data.token) {
            window.localStorage.setItem('token', data.token);
        }
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const getUser = createAsyncThunk('auth/getUser', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/user/getUser');
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.adminrole = null
            state.error = null
            state.token = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload.user
                state.adminrole = Boolean(action.payload.userRole === "admin")
                state.token = action.payload.token
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.message
            })
            .addCase(getUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload?.user
                state.token = action.payload?.token
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })

    }
})

export const selectIsLogged = (state) => Boolean(state.login.token)
export const selectIsAdmin = (state) => Boolean(state.login.adminrole)
export const infoAboutUser = (state) => (state.login.user);

export const { logout } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;