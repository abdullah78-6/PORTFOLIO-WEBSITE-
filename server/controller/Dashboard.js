import achivementmodel from "../models/Achievement-model.js"
import contactmodel from "../models/Contact-model.js"
import educationmodel from "../models/education-model.js"
import projectmodel from "../models/Project-model.js"
import skillmodel from "../models/Skill-model.js"
const Admindashboard=async(req,res)=>{
    try { 
        const totalachievement=await achivementmodel.countDocuments();
        const totalcontact=await contactmodel.countDocuments();
        const totaleducation=await educationmodel.countDocuments();
        const totalproject=await projectmodel.countDocuments();
        const totalskill=await skillmodel.countDocuments();
        
        res.json({status:true,tachive:totalachievement,tcontact:totalcontact,
            tedu:totaleducation,
            tpro:totalproject,
            tskill:totalskill,
          
        })
    } catch (error) {
        console.log("Dashboard error",error);
    }

}
export {Admindashboard}