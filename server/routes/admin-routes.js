import express from "express"
import { Getprofile, Googleauthlogin, Login, Logout, Register } from "../controller/admin-auth.js";
const Adminauthrouter=express.Router();
Adminauthrouter.post("/reg",Register);
Adminauthrouter.post("/log",Login);
Adminauthrouter.post("/out",Logout);
Adminauthrouter.get("/pr",Getprofile);
Adminauthrouter.post("/google_signin",Googleauthlogin);
export default Adminauthrouter;