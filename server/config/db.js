import mongoose from "mongoose";
const Dbconnection=async()=>{
    try {
        const connection =await mongoose.connect(process.env.MONGODB_URI);
        if(connection){
            console.log("DB CONNECTED SUCESSFULLY");
        }
        else{
            console.log("there is some problem in db connection ")
        }
        
    } catch (error) {
        console.log("db connection error ",error);
        
    }

}
export default Dbconnection;