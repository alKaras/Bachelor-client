import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios.js';

const initialState = {
    user: null,
    token: null,
    adminrole: false,
    isLoading: false,
    error: null,
}

export const loginUser = createAsyncThunk('login/loginUser', async (params, { rejectWithValue }) => {
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

export const registerUser = createAsyncThunk('login/registerUser', async (params, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/user/register', params);

        return data;
    } catch (error) {
        rejectWithValue(error.response.data);
    }

})

export const getUser = createAsyncThunk('login/getUser', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/user/getUser');
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

const loginSlice = createSlice({
    name: 'logreg',
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
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
                state.error = null
            })

            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload.user
                state.error = null
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.message
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
                state.error = null
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload.user
                state.adminrole = Boolean(action.payload.userRole === "admin")
                state.token = action.payload.token
                state.error = null
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
                state.error = null
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })

    }
})

export const selectIsLogged = (state) => Boolean(state.logreg.token)
export const selectIsAdmin = (state) => Boolean(state.logreg.adminrole)
export const infoAboutUser = (state) => (state.logreg.user);

export const { logout } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;