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
        navbarclass:"",
        projectdetails:{

            name:"",
            description:"",
            url:"",
        },
        skilldetails:{
            name:"",

        },
        herosectiondetails:{
            name:"",
            mainheading:"",
            Bio:""
        },
        skilllist:[],
        projectlist:[],
        Herolist:[]
        
        
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
    },
    setprojectdetails(state,action){
        const {name,value}=action.payload;
        state.projectdetails[name]=value;
    },
    setskilldetails(state,action){
        const {name,value}=action.payload;
        state.skilldetails[name]=value;
    },
    setherosectiondetails(state,action){
        const {name,value}=action.payload;
        state.herosectiondetails[name]=value;
    },
    setskilllist(state,action){
        state.skilllist=action.payload;
        
    },
    setprojectlist(state,action){
        state.projectlist=action.payload;
    },
    setHerolist(state,action){
        state.Herolist=action.payload;
    }
    
    
}
})
export const control=adminslice.actions;
export default adminslice.reducer;