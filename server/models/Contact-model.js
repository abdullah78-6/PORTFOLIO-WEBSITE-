import mongoose from "mongoose"
const Contactschema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
})
const contactmodel=mongoose.model.contact_model||mongoose.model("contact-model",Contactschema);
export default contactmodel;