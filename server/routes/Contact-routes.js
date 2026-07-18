import express from "express"
import { Addachievements, Addcontact, Addeducation, deleteachievement, Deletecontact, deleteeducation, getachievement, Getcontact, geteducation } from "../controller/Contactcontroller.js";
const ContactRouter=express.Router();
ContactRouter.post("/add_contact",Addcontact);
ContactRouter.delete("/delete_contact",Deletecontact);
ContactRouter.get("/get_contact",Getcontact);
ContactRouter.post("/add_education",Addeducation);
ContactRouter.post("/add_achive",Addachievements);
ContactRouter.get("/get_achive",getachievement);
ContactRouter.delete("/del_achive",deleteachievement);
ContactRouter.get("/get_education",geteducation);
ContactRouter.delete("/del_education",deleteeducation);
export default ContactRouter;