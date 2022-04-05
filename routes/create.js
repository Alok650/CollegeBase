const express = require("express");
const path = require("path");
const router = express.Router();

const blogs = [
  { title: "Samsung Interview experience", content: "Lorem ipsum1" },
  { title: "Sprinklr Interview experience", content: "Lorem ipsum2" },
  { title: "Microsoft Interview experience", content: "Lorem ipsum3" },
  { title: "Digit DP", content: "Lorem ipsum4" },
];
router.get("/create-post", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "create-post.html"));
});

router.post("/create-post", (req, res) => {
  console.log(req.body.title, req.body.content);
  blogs.push({ title: req.body.title, content: req.body.content });
  res.render("blogs.ejs", { blogs: blogs });
});

module.exports = router;

// Database , NoSQL , SQL , difference , Tables , Indexing
