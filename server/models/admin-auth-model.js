import mongoose from "mongoose"
const adminschema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
},{minimize:false});
const adminmodel=mongoose.model.admin||mongoose.model("admin-user-model",adminschema);
export default adminmodel;