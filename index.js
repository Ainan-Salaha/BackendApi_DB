const express= require('express');
// const data = require('./data');
const database = require('./DB/database')
const cors= require('cors');
const connect  = require('mongoose');
const blog = require('./models/blog')


const app=express();

app.use(cors({origin:"*",}));


app.get('/',async (req,res)=>{
    try {
        const result = await blog.find({})
        // console.log(result);
        return res.status(200).send(result);
    } catch (error) {
        console.log('something wrong in findtodb',error)
        return res.status(500).send({ message: "something wrong in findtodb"})

    }
})


app.listen(3002,async ()=>{
    console.log("Server started at Port 3002")
    await database()
})