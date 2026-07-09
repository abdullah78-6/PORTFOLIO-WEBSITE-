import express from "express"
import { Addheroimage, Addproject, Addskill, DeleteHerosection, DeleteProject, DeleteSkill, Getherosection, Getproject, Getskill } from "../controller/Addcontent.js";
import multer from "multer"
const Addcontentrouter=express.Router();
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload=multer({storage:storage});
Addcontentrouter.post("/addproject",upload.single("image"),Addproject);
Addcontentrouter.post("/addskill",upload.single("image"),Addskill);
Addcontentrouter.post("/heroimage",upload.single("image"),Addheroimage);
Addcontentrouter.get("/getproject",Getproject);
Addcontentrouter.get("/getskill",Getskill);
Addcontentrouter.get("/gethero",Getherosection);
Addcontentrouter.delete("/deleteskill",DeleteSkill);
Addcontentrouter.delete("/deleteproject",DeleteProject);
Addcontentrouter.delete("/deletehero",DeleteHerosection);
export default Addcontentrouter;