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
const Getproject=async(req,res)=>{
    try {
    const project=await projectmodel.find();
    return res.json({status:true,projectlist:project});
    } catch (error) {
    console.log("get project error ",error);
    res.json({status:false,message:error.message});
    }
}
const Getskill=async(req,res)=>{
    try {
    const skill=await skillmodel.find();
    return res.json({status:true,skilllist:skill});
    } catch (error) {
    console.log("get skill error ",error);
    res.json({status:false,message:error.message});
    }


}
const Getherosection=async(req,res)=>{
    try {
    const herosection=await Heromodel.find();
    return res.json({status:true,herolist:herosection});
    } catch (error) {
    console.log("get herosection error ",error);
    res.json({status:false,message:error.message});
    }

}
const DeleteSkill=async(req,res)=>{
     try {
        const skill=await skillmodel.findById(req.body.id);
      if(!skill){
    return  res.json({success:false,message:"SKILL NOT FOUND"});

        }
        
         console.log("this is public id ",skill.public_id);
    if(skill.public_id){
           
            await cloudinary.uploader.destroy(skill.public_id);

        }
        
        await skillmodel.findByIdAndDelete(req.body.id);
         res.json({success:true,message:"DATA DELETED SUCESSFULLY "});
        
    } catch (error) {
        console.log("delete error",error);
         res.json({success:false,message:"DATA DELETE ERROR"});
        
    }

}
const DeleteProject=async(req,res)=>{
    try {
        const project=await projectmodel.findById(req.body.id);
      if(!project){
    return  res.json({success:false,message:"PROJECT NOT FOUND"});

        }
        
         console.log("this is public id ",project.public_id);
    if(project.public_id){
           
            await cloudinary.uploader.destroy(project.public_id);

        }
        
        await projectmodel.findByIdAndDelete(req.body.id);
         res.json({success:true,message:"DATA DELETED SUCESSFULLY "});
        
    } catch (error) {
        console.log("delete error",error);
         res.json({success:false,message:"DATA DELETE ERROR"});
        
    }


}
const DeleteHerosection=async(req,res)=>{
    try {
        const hero=await Heromodel.findById(req.body.id);
      if(!hero){
    return  res.json({success:false,message:"HERO DETAILS NOT FOUND"});

        }
        
         console.log("this is public id ",hero.public_id);
    if(hero.public_id){
           
            await cloudinary.uploader.destroy(hero.public_id);

        }
        
        await Heromodel.findByIdAndDelete(req.body.id);
         res.json({success:true,message:"DATA DELETED SUCESSFULLY "});
        
    } catch (error) {
        console.log("delete error",error);
         res.json({success:false,message:"DATA DELETE ERROR"});
        
    }


}
const Updateherosection=async(req,res)=>{
    try {
        const {id,name,Bio,mainheading}=req.body;
        if(!req.file){
            return res.json({staus:false,message:"Image Is Required"});
        }
        if(!id||!name||!Bio||!mainheading){
           return  res.json({status:false,message:"All Fields Are Required"});
        }
        const Hero=await Heromodel.findById(id);
        if(!Hero){
            return res.json({status:false,message:"Hero Section Not Found"});
        }
        if(req.file){
            if(Hero.public_id){
                await cloudinary.uploader.destroy(Hero.public_id);
            }
            const result=await cloudinary.uploader.upload(req.file.path,{
                folder:"uploads",
                resource_type:"image",
                timeout:120000
            });
            fs.unlinkSync(req.file.path);
            Hero.image=result.secure_url;
            Hero.public_id=result.public_id;
            Hero.localfile=req.file.filename;
        }
        Hero.name=name;
        Hero.Bio=Bio;
        Hero.mainheading=mainheading;
        await Hero.save();
        
        return res.json({status:true,message:"Update Complete"});
        
        
        
    } catch (error) {
        console.log(error);
        if(req.file&&fs.existsSync(req.file.path)){
            fs.unlinkSync(req.file.path);
        }
        res.json({status:false,message:"Update Hero Section Error"})
        
    }
    
    
}
export {Addproject,Addskill,Addheroimage,Getproject,Getskill,Getherosection,DeleteSkill,DeleteProject,DeleteHerosection,Updateherosection}