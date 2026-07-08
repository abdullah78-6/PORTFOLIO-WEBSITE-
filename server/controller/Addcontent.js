import cloudinary from "../config/cloudinary.js"
import projectmodel from "../models/Project-model.js"
import fs from "fs"
import skillmodel from "../models/Skill-model.js"
import Heromodel from "../models/Herosection-model.js"
const Addproject=async(req,res)=>{
   try {
            if(!req.file){
          return  res.json({status:false,result:"ADD IMAGE "})
       }
       
      
       const {name,url,description}=req.body;
       if(!name||!description){
           return res.json({status:false,result:"THESE TWO FIELDS ARE REQUIRED"});
       }
       
       const result=await cloudinary.uploader.upload(req.file.path,{
           folder:"uploads",
           resource_type:"image",
           timeout:120000
       })
       console.log(result.secure_url);
       fs.unlinkSync(req.file.path);
       const projectstore=new projectmodel({
           name,
           description,
           url,
           localfile:req.file.filename,
           image:result.secure_url,
           public_id:result.public_id
       })
       
           await projectstore.save();
         return   res.json({status:true,result:"Project Added Successfully"})
           
       } catch (error) {
           console.log("ADD PROJECT ERROR ",error);
         return  res.json({status:false,result:"ADD PROJECT ERROR "});
           
       }
   

}
const Addskill=async(req,res)=>{
      try {
            if(!req.file){
          return  res.json({status:false,result:"ADD IMAGE "})
       }
       
      
       const {name}=req.body;
       if(!name){
           return res.json({status:false,result:"SKILL NAME  ARE REQUIRED"});
       }
       
       const result=await cloudinary.uploader.upload(req.file.path,{
           folder:"uploads",
           resource_type:"image",
           timeout:120000
       })
       console.log(result.secure_url);
       fs.unlinkSync(req.file.path);
       const skillstore=new skillmodel({
           name,
           localfile:req.file.filename,
           image:result.secure_url,
           public_id:result.public_id
       })
       
           await skillstore.save();
         return   res.json({status:true,result:"Skill Added Successfully"})
           
       } catch (error) {
           console.log("ADD SKILL ERROR ",error);
         return  res.json({status:false,result:"ADD SKILL ERROR "});
           
       }
 
    

}
const Addheroimage=async(req,res)=>{
    try {
            if(!req.file){
          return  res.json({status:false,result:"ADD IMAGE "})
       }
       
      
       const {name,Bio,mainheading}=req.body;
       if(!name||!Bio||!mainheading){
           return res.json({status:false,result:"All Fields Are Required"});
       }
       
       const result=await cloudinary.uploader.upload(req.file.path,{
           folder:"uploads",
           resource_type:"image",
           timeout:120000
       })
       console.log(result.secure_url);
       fs.unlinkSync(req.file.path);
       const Herostore=new Heromodel({
           name,
           mainheading,
           Bio,
           localfile:req.file.filename,
           image:result.secure_url,
           public_id:result.public_id
       })
       
           await Herostore.save();
         return   res.json({status:true,result:"Hero Section Added Successfully"})
           
       } catch (error) {
           console.log("ADD HERO SECTION  ERROR ",error);
         return  res.json({status:false,result:"ADD HERO SECTION ERROR "});
           
       }

}
export {Addproject,Addskill,Addheroimage}