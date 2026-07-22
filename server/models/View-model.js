import mongoose from "mongoose";
const viewschema=new mongoose.Schema({
    totalviews:{type:Number,default:0}
});
const viewmodel=mongoose.model.view_model||mongoose.model("view-model",viewschema);
export default viewmodel;