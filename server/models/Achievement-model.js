import mongoose from "mongoose"
const Achievementschema=new mongoose.Schema({
    headline:{type:String,required:true},
    description:{type:String,required:true},
    
})
const achivementmodel=mongoose.model.education_model||mongoose.model("achivement-model",Achievementschema);
export default achivementmodel;