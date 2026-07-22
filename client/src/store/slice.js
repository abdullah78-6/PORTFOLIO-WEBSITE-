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
        Herosection:[],
        education:[],
        achivement:[],
        scroll:0,
        skills:[]
},
    reducers:{
        setContactdetails(state,action){
            const {name,value}=action.payload;
            state.Contactdetails[name]=value;
        },
        setskills(state,action){
            state.skills=action.payload;

        },
        setscroll(state,action){
            state.scroll=action.payload;
        },
        setachivement(state,action){
            state.achivement=action.payload
        },
        setHerosection(state,action){
            state.Herosection=action.payload;
        },
        setnavbarclass(state,action){
            state.navbarclass=action.payload;
        },
        setmobilemenu(state,action){
            state.mobilemenu=action.payload;
        },
        seteducation(state,action){
            state.education=action.payload;
        }

        

    }
})
export const control=clientslice.actions;
export default clientslice.reducer;