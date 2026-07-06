import {configureStore} from "@reduxjs/toolkit";
import admin from "./slice.js";
const AdminStore=configureStore({
    reducer:{
        main:admin
    }
})
export default AdminStore;