import mongoose from "mongoose"
const Resumeschema=new mongoose.Schema({
    image:{type:String,required:true},
    public_id:{type:String,required:true},
    localfile:{type:String,required:true},
})
const resumemodel=mongoose.model.resume_model||mongoose.model("resume-model",Resumeschema);
export default resumemodel;