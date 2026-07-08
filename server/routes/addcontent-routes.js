import express from "express"
import { Addheroimage, Addproject, Addskill } from "../controller/Addcontent.js";
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
export default Addcontentrouter;