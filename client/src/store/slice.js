import {createSlice} from "@reduxjs/toolkit"
const clientslice=createSlice({
    name:"client",
    initialState:{
        Contactdetails:{
            name:"",
            email:"",
            message:""
        }
},
    reducers:{
        setContactdetails(state,action){
            const {name,value}=action.payload;
            state.Contactdetails[name]=value;
        }
        

    }
})
export const control=clientslice.actions;
export default clientslice.reducer;