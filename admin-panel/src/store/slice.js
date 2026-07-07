import {createSlice} from "@reduxjs/toolkit"
const adminslice=createSlice({
    name:"admin",
    initialState:{
        backendemail:"",
        logininfo2:{
            
            email:"",
            password:""
        },
        passwordhide:false,
        navbarclass:""
        
        
    },
    reducers:{
    setbackendemail(state,action){
            state.backendemail=action.payload;
    },
    setlogininfo2(state,action){
        const {name,value}=action.payload;
        state.logininfo2[name]=value;
        
    },
    setpasswordhide(state,action){
        state.passwordhide=action.payload
    },
    setnavbarclass(state,action){
        state.navbarclass=action.payload;
    }
    
}
})
export const control=adminslice.actions;
export default adminslice.reducer;