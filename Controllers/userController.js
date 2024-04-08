// 1. import userSchema or model
const users= require('../Models/userSchema')


//Register & Login: logic
exports.register = async(req,res)=>{
    // accept data from client
    const {username,email,password} = req.body;
    console.log(username,email,password);
    try{
        // check if user already exists
        const existingUser = await users.findOne({email})
        console.log(existingUser);
        if(existingUser){

            res.status(400).json("Email already registered")
        }
        else{
            // create a new user
            const newUser = new users({
                username,
                email,
                password,
                github:"",
                livelink:"",
                pofile:""
            })
            await newUser.save();
            res.status(200).json(newUser)
        } 
    }
    catch(err){
        res.status(500).json("Register failed...")
    }
}


 