import express from "express"
import Adminauthrouter from "./routes/admin-routes.js";
import Dbconnection from "./config/db.js";
import "dotenv/config";
import cors from "cors"
import cookieParser from "cookie-parser";
import Addcontentrouter from "./routes/addcontent-routes.js";
import ContactRouter from "./routes/Contact-routes.js";
import viewrouter from "./routes/view-router.js";
const app=express();
app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());

Dbconnection();
app.use("/api/auth",Adminauthrouter);
app.use("/api/admin",Addcontentrouter);
app.use("/api/client",ContactRouter);
app.use("/api/monitor",viewrouter);
const port=process.env.PORT;
app.get("/",(req,res)=>{
    res.json({status:true,message:"SEVER IS READY "});

})
app.listen(port,()=>{
    console.log(`server is listining https://localhost:${port}`);
})