import {createSlice} from "@reduxjs/toolkit"
const clientslice=createSlice({
    name:"client",
    initialState:{
        counter:0
},
    reducers:{
        setcounter(state){
            state.counter+=1;
        }

    }
})
export const control=clientslice.actions;
export default clientslice.reducer;