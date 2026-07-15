import express from "express"
import { Addcontact, Deletecontact, Getcontact } from "../controller/Contactcontroller.js";
const ContactRouter=express.Router();
ContactRouter.post("/add_contact",Addcontact);
ContactRouter.delete("/delete_contact",Deletecontact);
ContactRouter.get("/get_contact",Getcontact);
export default ContactRouter;