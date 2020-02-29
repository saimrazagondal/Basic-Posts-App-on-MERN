const mongoose = require("mongoose");

//declare a schema for the model
const Schema = mongoose.Schema;
const blogPostSchema = new Schema({
  title: String,
  body: String,
  date: {
    type: String,
    default: Date.now()
  }
});

//create a model and pass in the schema
const blogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = blogPost;
