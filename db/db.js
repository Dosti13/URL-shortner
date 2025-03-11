const mongoose = require("mongoose")
require("dotenv").config()

const connect =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URl)
        console.log("connect sucessfuly");
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = connect