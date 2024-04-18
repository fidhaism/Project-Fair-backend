const multer = require('multer')

//All words are predefined

// store multer data in upload folder
const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null,'./uploads')
    },
    //Set image name
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}-${file,originame}`
        callback(null,filename)
    }
})

//For file filter jpg,jpeg,png
const fileFilter = (req,file,callback)=>{
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'){
        callback(null, true)
    }
    else{
        callback(null,false)
        return callback(new Error("Please upload following image extensions(png,jpeg,jpg)only"))
    }
}

const multerConfig = multer({
    storage,fileFilter
})
module.exports = multerConfig