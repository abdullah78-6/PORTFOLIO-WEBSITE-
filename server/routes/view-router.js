import express from "express"
import { addwebsiteview, getwebsiteview, setdefault } from "../controller/view-controller.js";
const viewrouter=express.Router();
viewrouter.post("/addv",addwebsiteview);
viewrouter.get("/getv",getwebsiteview);
viewrouter.post("/setv",setdefault);
export default viewrouter;
