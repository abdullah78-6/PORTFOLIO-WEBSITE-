import express from "express"
import { Addheroimage, Addproject, Addresume, Addskill, DeleteHerosection, DeleteProject, DeleteResume, DeleteSkill, Getherosection, Getproject, GetResume, Getskill, Updateherosection } from "../controller/Addcontent.js";
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
Addcontentrouter.put("/update",upload.single("image"),Updateherosection);
Addcontentrouter.post("/resume",upload.single("image"),Addresume);
Addcontentrouter.get("/get_resume",GetResume);
Addcontentrouter.delete("/delete_resume",DeleteResume);
export default Addcontentrouter;