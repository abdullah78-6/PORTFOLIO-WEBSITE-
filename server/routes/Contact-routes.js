import express from "express"
import { Addachievements, Addcontact, Addeducation, Deletecontact, Getcontact } from "../controller/Contactcontroller.js";
const ContactRouter=express.Router();
ContactRouter.post("/add_contact",Addcontact);
ContactRouter.delete("/delete_contact",Deletecontact);
ContactRouter.get("/get_contact",Getcontact);
ContactRouter.post("/add_education",Addeducation);
ContactRouter.post("/add_achive",Addachievements);
export default ContactRouter;