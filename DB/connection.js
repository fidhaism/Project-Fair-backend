// 1. import mongoose that was installed
const mongoose = require('mongoose'); 

// 2. Define connection string
const connectionString= process.env.DATABASE
//const DATABASE = 'mongodb+srv://fidha:luminar@cluster0.jp6pl8t.mongodb.net/project-fair?retryWrites=true&w=majority&appName=Cluster0';

// 3. Connection code
mongoose.connect(connectionString).then(()=>{
    console.log('Connected to MongoDB database...');
})
.catch((error)=>{
    console.log("MongoDB ATLAS connection error",error);
})

// mongoose.connect(DATABASE)
//     .then(() => {
//         console.log("MongoDB ATLAS Database connected successfully");
//     })
//     .catch((error) => {
//         console.log("Error connecting to MongoDB ATLAS", error);
//     });


