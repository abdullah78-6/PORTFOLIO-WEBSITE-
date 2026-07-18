import contactmodel from "../models/Contact-model.js";
import  {Resend} from "resend";
import educationmodel from "../models/education-model.js";
import achivementmodel from "../models/Achievement-model.js";
const resend=new Resend(process.env.RESEND_KEY);
const Addcontact=async(req,res)=>{
    const {name,message,email}=req.body;
        try {
            if(!name||!message||!email){
                return res.json({status:false,message:"All Fields Are Required"});
            }
             const newcontact=new contactmodel({
                        name:name,
                        email:email,
                        
                        message:message
                    });
                    await newcontact.save();
             res.json({status:true,message:"Thank you for reaching out! Your message has been sent successfully."});
          const data=await  resend.emails.send({
                    from:"onboarding@resend.dev",
                        to:"abdullahqidwai92@gmail.com",
                        subject:"New Contact Found",
                        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="margin:0;padding:30px;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">

  <table width="100%" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">

        <table width="600" cellspacing="0" cellpadding="0"
          style="background:#ffffff;border-radius:15px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td
              style="background:linear-gradient(135deg,#4f46e5,#7c3aed);padding:30px;text-align:center;color:white;">
              <h1 style="margin:0;font-size:28px;">📩 New Portfolio Contact</h1>
              <p style="margin-top:10px;font-size:15px;opacity:.9;">
                Someone has submitted your contact form.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px;">

              <table width="100%" cellpadding="10" cellspacing="0"
                style="border-collapse:collapse;">

                <tr>
                  <td style="width:140px;font-weight:bold;color:#555;">
                    👤 Name
                  </td>
                  <td style="background:#f8f9fc;border-radius:8px;">
                    ${name}
                  </td>
                </tr>

                <tr>
                  <td style="font-weight:bold;color:#555;">
                    📧 Email
                  </td>
                  <td style="background:#f8f9fc;border-radius:8px;">
                    <a href="mailto:${email}" style="color:#4f46e5;text-decoration:none;">
                      ${email}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="font-weight:bold;color:#555;vertical-align:top;">
                    💬 Message
                  </td>
                  <td
                    style="background:#f8f9fc;border-radius:8px;line-height:1.8;color:#333;">
                    ${message}
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              style="background:#111827;color:#d1d5db;text-align:center;padding:20px;font-size:14px;">
              <p style="margin:0;">
                🚀 Portfolio Contact Notification
              </p>

              <p style="margin-top:8px;color:#9ca3af;">
                This email was automatically generated from your portfolio
                contact form.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`
                
            });
            console.log("email send successfully",data);
                    
    
            
        } catch (error) {
            console.log("add contact error",error);
            return res.json({status:false,message:"Add Contact Error"});
            
        }

}
const Deletecontact=async(req,res)=>{
    try {
            const {id}=req.body;
            const contact=await contactmodel.findByIdAndDelete({_id:id});
            if(contact){
                return res.json({status:true,message:"DELETE SUCCESSFULLY"});
            }
            else{
                return res.json({status:false,message:"DATA NOT DELETE"});
            }
            
    
            
        } catch (error) {
            console.log(error);
            res.json({status:false,message:"delete contact error"});
            
            
        }

}
const Getcontact=async(req,res)=>{
        try {
                const contact=await contactmodel.find();
                
                return res.json({status:true,contactlist:contact});
        
            } catch (error) {
                console.log("get contact error ",error);
                res.json({status:false,message:error.message});
                
            }
    

}
const Addeducation=async(req,res)=>{
     try {
        const {degreename,collegename,cgpi,duration}=req.body;
         if(!degreename||!collegename||!cgpi||!duration){
             return res.json({status:false,result:"ALL FIELDS ARE REQUIRED"});
         }
         const educationstore=new educationmodel({
             degreename,
             collegename,
             cgpi,
             duration
             
         })
         
             await educationstore.save();
           return   res.json({status:true,result:"Education Added Successfully"})
             
         } catch (error) {
             console.log("ADD EDUCATION ERROR ",error);
           return  res.json({status:false,result:"ADD EDUCATION ERROR "});
             
         }
  

}
const Addachievements=async(req,res)=>{
try {
      const {headline,description}=req.body;
      
        
         if(!headline||!description){
             return res.json({status:false,result:"ALL FIELDS ARE REQUIRED"});
         }
         const achivementstore=new achivementmodel({
             headline:headline,
             description:description,
             
             
         })
         
             await achivementstore.save();
           return   res.json({status:true,result:"Achivement Added Successfully"})
             
         } catch (error) {
             console.log("ADD Achivement ERROR ",error);
           return  res.json({status:false,result:"ADD ACHIVEMENT ERROR "});
             
         }
  

}
const getachievement=async(req,res)=>{
  try {
                const achievement=await achivementmodel.find();
                
                return res.json({status:true,answer:achievement});
        
            } catch (error) {
                console.log("get achievement error ",error);
                res.json({status:false,message:error.message});
                
            }


}
const deleteachievement=async(req,res)=>{
    try {
            const {id}=req.body;
            const achievement=await achivementmodel.findByIdAndDelete({_id:id});
            if(achievement){
                return res.json({status:true,message:"DELETE SUCCESSFULLY"});
            }
            else{
                return res.json({status:false,message:"DATA NOT DELETE"});
            }
            
    
            
        } catch (error) {
            console.log(error);
            res.json({status:false,message:"delete achievement error"});
            
            
        }


}
const geteducation=async(req,res)=>{
  try {
                const education=await educationmodel.find();
                
                return res.json({status:true,answer:education});
        
            } catch (error) {
                console.log("get education error ",error);
                res.json({status:false,message:error.message});
                
            }


}
const deleteeducation=async(req,res)=>{
  try {
            const {id}=req.body;
            const education=await educationmodel.findByIdAndDelete({_id:id});
            if(education){
                return res.json({status:true,message:"DELETE SUCCESSFULLY"});
            }
            else{
                return res.json({status:false,message:"DATA NOT DELETE"});
            }
            
    
            
        } catch (error) {
            console.log(error);
            res.json({status:false,message:"delete education error"});
            
            
        }

}
export{Addcontact,Deletecontact,Getcontact,Addeducation,Addachievements,getachievement,deleteachievement,geteducation,deleteeducation}

