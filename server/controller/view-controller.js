import viewmodel from "../models/View-model.js";
const addwebsiteview=async(req,res)=>{
    try {
        
        // const view=await viewmodel.findOneAndUpdate(  old code give just  andaaza of no of user visited website 
        //     {},
        //     {
        //         $inc:{
        //             totalviews:1,
        //         },
        //     },
        //     {
        //         new:true,
        //         upsert:true,
        //     }
        // );
        if(req.cookies.portfolioVisitor){
            const view=await viewmodel.findOne();
            return res.json({status:true,answer:view?view.totalviews:0});
        }
        const view=await viewmodel.findOneAndUpdate(
            {},
            {
                $inc:{
                    totalviews:1,
                },
            },
            {
                new:true,
                upsert:true,
            }
        );
        res.cookie("portfolioVisitor","visited",{
            maxAge:365 * 24 * 60 * 60 * 1000,
            httpOnly:true,
            sameSite:"lax",
        })
        res.json({status:true,answer:view.totalviews});
     } catch (error) {
        console.log("website view error",error);
        
    }

}
const getwebsiteview=async(req,res)=>{
    try {
        const view=await viewmodel.findOne();
        res.json({status:true,answer:view?view.totalviews:0});
        } catch (error) {
        console.log("get website view error",error);
        
    }

}
const setdefault=async(req,res)=>{
    try {
        const view=await viewmodel.findOneAndUpdate(
            {},
            {
               
                    totalviews:0,
               
            },
            {
                new:true,
                upsert:true,
            }
        )
        res.clearCookie("portfolioVisitor");
        res.json({status:true,message:"Reset to Default",answer:view.totalviews});
        
    } catch (error) {
        console.log("set default error",error);
        
    }

}
export {addwebsiteview,getwebsiteview,setdefault}
