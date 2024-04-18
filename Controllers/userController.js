// 1. import userSchema or model
const users= require('../Models/userSchema')

// import jsonwebtoken
const jwt = require('jsonwebtoken')

//Register Function logic
exports.register = async(req,res)=>{
  console.log("Inside Register method");
    // accept data from client
    const {username,email,password} = req.body;
    console.log(username,email,password);
    try{
        // check if user already exists
        const existingUser = await users.findOne({email})
        console.log(existingUser);
        if(existingUser){

            res.status(406).json("User already registered")
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




// Login function logic
exports.login = async (req, res) => {
  // Extract email and password from request body
  const { email, password } = req.body;

  try {
    // Find user with matching email and password in the database
    const existingUser = await users.findOne({ email, password });
    if (existingUser) {
      // Generate a new JSON Web Token (JWT)
      const token = jwt.sign({ userId: existingUser._id }, "super2024 ");
      // Log the token for debugging purposes
      console.log(token);
      // Send the user data and token as a response
      res.status(200).json({ existingUser, token });
    } else {
      // If no user is found, send a 404 response
      res.status(404).json("Invalid email/password");
    }
  } catch (err) {
    // If an error occurs, send a 500 response with the error message
    res.status(500).json("Login failed..." + err);
  }
};