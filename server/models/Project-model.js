import mongoose from "mongoose"
const projectschema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    url:{type:String,required:false},
     image:{type:String,required:true},
    public_id:{type:String,required:true},
    localfile:{type:String,required:true},
   

})
const projectmodel=mongoose.model.project||mongoose.model("project-model",projectschema);
export default projectmodel;