import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice.ts";

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type StoreType = typeof store;