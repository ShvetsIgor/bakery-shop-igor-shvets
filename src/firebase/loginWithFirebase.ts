import type {LoginData} from "../utils/app-types.ts";
import {setAuthUser} from "../redux/slices/authSlice.ts";
import type {Dispatch} from "@reduxjs/toolkit";
import { login } from "./firebaseAuthService.ts";

export const loginWithFirebase = async (
    data: LoginData | undefined,
    dispatch: Dispatch,
    navigate: (path: string) => void
) => {
    try {
        const authUser = await login(data);
        if (authUser) {
            dispatch(setAuthUser(authUser));
            localStorage.setItem("email", authUser);
        }
        navigate("/");
    } catch (e) {
        console.log(e) //ToDo
    }
};