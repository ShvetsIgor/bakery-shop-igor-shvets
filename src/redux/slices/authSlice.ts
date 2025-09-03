import {createSlice} from "@reduxjs/toolkit";

type AuthState = {
    authUser: string | null,
}

const storedAuth = localStorage.getItem("email");

const initialState: AuthState = {
    authUser: storedAuth || null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        },
        resetAuthUser: (state) => {
            state.authUser = null;
        }
    }
})

export const {setAuthUser, resetAuthUser} = authSlice.actions;
export const authReducer = authSlice.reducer;