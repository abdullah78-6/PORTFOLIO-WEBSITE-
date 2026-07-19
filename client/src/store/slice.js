import {createSlice} from "@reduxjs/toolkit"
const clientslice=createSlice({
    name:"client",
    initialState:{
        Contactdetails:{
            name:"",
            email:"",
            message:""
        },
        navbarclass:"",
        mobilemenu:true,
        Herosection:[]
},
    reducers:{
        setContactdetails(state,action){
            const {name,value}=action.payload;
            state.Contactdetails[name]=value;
        },
        setHerosection(state,action){
            state.Herosection=action.payload;
        },
        setnavbarclass(state,action){
            state.navbarclass=action.payload;
        },
        setmobilemenu(state,action){
            state.mobilemenu=action.payload;
        }
        

    }
})
export const control=clientslice.actions;
export default clientslice.reducer;