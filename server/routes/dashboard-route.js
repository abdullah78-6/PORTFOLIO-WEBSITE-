import express from "express"
import { Admindashboard } from "../controller/Dashboard.js";
const dashboardrouter=express.Router();
dashboardrouter.get("/getdash",Admindashboard);
export default dashboardrouter;