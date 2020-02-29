const express = require("express");
const router = express.Router();

const BlogPost = require("./../models/blogPostModel");

//**********************Routes*******************/

router.get("/", (req, res) => {
  res.json("request made to /");
});

router.get("/get", (req, res) => {
  BlogPost.find({})
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.log("error sending data to client.");
    });
});

router.get("/delete", (req, res) => {
  BlogPost.remove({})
    .then(() => {
      res.json({
        msg: "posts deleted."
      });
    })
    .catch(error => {
      console.log("error sending data to client.");
    });
});

router.post("/save", (req, res) => {
  const data = req.body;
  const newPost = new BlogPost(data);
  newPost.save(error => {
    if (error) {
      res.json("error occured in saving.");
    } else {
      res.json("no error. data sucessfully saved!");
    }
  });
});

module.exports = router;
