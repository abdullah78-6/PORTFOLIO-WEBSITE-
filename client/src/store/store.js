import {configureStore} from "@reduxjs/toolkit";
import client from "./slice.js";
const ClientStore=configureStore({
    reducer:{
        main:client
    }
})
export default ClientStore;