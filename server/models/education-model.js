import mongoose from "mongoose"
const Educationschema=new mongoose.Schema({
    degreename:{type:String,required:true},
    collegename:{type:String,required:true},
    cgpi:{type:String,required:true},
    duration:{type:String,required:true},
})
const educationmodel=mongoose.model.education_model||mongoose.model("education-model",Educationschema);
export default educationmodel;