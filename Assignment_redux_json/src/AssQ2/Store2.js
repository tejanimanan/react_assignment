import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer2";

export const store2 = configureStore({
    reducer:{
        xyz:reducer
    }
})
