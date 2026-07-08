import {v2 as cloudinary} from "cloudinary"
cloudinary.config({
    cloud_name:process.env.CLOUDNAME,
    api_key:process.env.KEYCLOUD,
    api_secret:process.env.SECRETCLOUD

})
export default cloudinary;