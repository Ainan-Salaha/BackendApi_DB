const mongoose = require('mongoose')

const url ="mongodb+srv://ainansalaha77:Ainansalaha77@blog.j7qwkuc.mongodb.net/blog?retryWrites=true&w=majority"

const connect = async()=>{
    try {
        console.log("Conneccting to mongodb ....!!")
        const dbconnect = await mongoose.connect(url)// making the connection
        console.log("connected ->"  );
    } catch (error) {
        console.log("Error in connected to db")
        
    }
}

module.exports= connect