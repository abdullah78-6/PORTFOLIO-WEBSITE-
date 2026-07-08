import mongoose from "mongoose"
const Skillschema=new mongoose.Schema({
    name:{type:String,required:true},
   image:{type:String,required:true},
    public_id:{type:String,required:true},
    localfile:{type:String,required:true},
})
const skillmodel=mongoose.model.skill_model||mongoose.model("skill-model",Skillschema);
export default skillmodel;