import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer3";


export const Store3 = configureStore({
    reducer:{
        xyz:reducer
    }
})