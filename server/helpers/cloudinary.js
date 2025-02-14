const cloudinary = require("cloudinary").v2;
const multer = require("multer");


cloudinary.config({
    cloud_name :"dvxyf1sfz", 
    api_key:"762911858315187",
    api_secret:"rm0fwLt7H-G8a9NTIsRaN4uXpus",
});



const storage = new multer.memoryStorage();


async function imageUploadUtils(file){
    console.log("file send", file);
    
    const result = await cloudinary.uploader.upload(file,{
        resource_type : "auto",

   });

   console.log("res", result)

    return result;

}

const upload = multer ({storage});

module.exports = {upload, imageUploadUtils, upload};