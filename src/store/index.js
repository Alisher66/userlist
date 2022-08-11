import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./userSlice";
import {composeWithDevTools} from "redux-devtools-extension"

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
})