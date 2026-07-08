import mongoose from "mongoose"
const Heroschema=new mongoose.Schema({
    name:{type:String,required:true},
    mainheading:{type:String,required:true},
    Bio:{type:String,required:true},
   image:{type:String,required:true},
    public_id:{type:String,required:true},
    localfile:{type:String,required:true},
})
const Heromodel=mongoose.model.Hero_Model||mongoose.model("Hero-Model",Heroschema);
export default Heromodel;