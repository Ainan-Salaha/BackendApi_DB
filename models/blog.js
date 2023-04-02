const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    "id": Number,
    "title": String,
    "img": String,
    "category": String,
    "description": String,

})

const Blog = mongoose.model("data", blogSchema)
module.exports = Blog
