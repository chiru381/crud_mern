const mongoose = require("mongoose");

const DB = 'mongodb://127.0.0.1:27017/crud_mern'


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));