//Schema maps to a mongodb collection 


//import mongoose
const mongoose = require('mongoose')

//2. Create schema
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,  
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String,
       
    },
    livelink:{
        type:String,
    },
    profile:{
        type:String,
    },

})

//3. Create model
const users = mongoose.model('users',userSchema)



// Export model       
module.exports = users;