// -->It is a collection of Slice
import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
// import {blogSlice} from './blogSlice'
import blogSlice from  './blogSlice'
const store = configureStore({
    reducer:{
        auth : authSlice,
        blog : blogSlice,
    }

})

export default store;