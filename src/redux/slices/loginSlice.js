import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios.js';

const initialState = {
    user: null,
    deleteduser: null,
    datausers: [],
    token: null,
    adminrole: false,
    isLoading: 'loading',
    error: null,
    isRegistered: false,
    amountusers: null,
}

export const loginUser = createAsyncThunk('login/loginUser', async (params, { _, rejectWithValue }) => {
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
        return rejectWithValue(error.response.data);
    }
})

export const getUser = createAsyncThunk('login/getUser', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/user/getUser');
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const getUsers = createAsyncThunk('login/getUsers', async () => {
    const { data } = await axios.get('/user/getUsers');
    return data;
})

export const deleteUser = createAsyncThunk('login/deleteUser', async (param, { rejectWithValue }) => {
    try {
        const { data } = await axios.delete(`/user/deleteuser/${param}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const getAmountUsers = createAsyncThunk('login/getAmount', async () => {
    const { data } = await axios.get('/user/getamount');
    return data;
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
                state.isLoading = 'loading'
                state.error = null
            })

            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = 'loaded'
                state.user = action.payload.user
                state.error = null
                state.isRegistered = true
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = 'error'
                state.error = action.payload.message
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = 'loading'
                state.error = null
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = 'loaded'
                state.user = action.payload.user
                state.adminrole = Boolean(action.payload.userRole === "admin")
                state.token = action.payload.token
                state.error = null
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = 'error'
                state.error = action.payload.message
            })
            .addCase(getUser.pending, (state) => {
                state.isLoading = 'loading'
                state.error = null
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = 'loaded'
                state.adminrole = action.payload?.role
                state.user = action.payload?.user
                state.token = action.payload?.token
                state.error = null
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = 'error'
                state.error = action.error.message
            })
            .addCase(getUsers.pending, (state) => {
                state.isLoading = 'loading'
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = "loaded"
                state.datausers = action.payload.users
            })
            .addCase(getUsers.rejected, (state) => {
                state.isLoading = 'error'
            })
            .addCase(deleteUser.pending, (state) => {
                state.isLoading = 'loading'
                state.error = null
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.isLoading = 'loaded'
                state.deleteduser = action.payload.deleteduser
                state.error = null
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.isLoading = 'error'
                state.error = action.payload.message
            })
            .addCase(getAmountUsers.pending, (state) =>{
                state.isLoading = 'loading'
                state.error = null
            })
            .addCase(getAmountUsers.fulfilled, (state, action) =>{
                state.isLoading = 'loaded'
                state.amountusers = action.payload.amount
                state.error = null
            })
            .addCase(getAmountUsers.rejected, (state, action) =>{
                state.isLoading = 'error'
                state.error = action.payload.message
            })
    }
})
export const selectIsRegged = (state) => (state.logreg.isRegistered);
export const selectIsLogged = (state) => Boolean(state.logreg.token)
export const selectIsAdmin = (state) => Boolean(state.logreg.adminrole)
export const selectDeletedInfo = (state) => (state.logreg.deleteduser);

export const infoAboutUser = (state) => (state.logreg.user);
export const fetchUsers = (state) => (state.logreg.datausers);

export const selectAmount = (state) => (state.logreg.amountusers);

export const { logout } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;