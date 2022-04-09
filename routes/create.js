const express = require("express");
const path = require("path");
const router = express.Router();
const Post = require("../model/post");

router.get("/create-post", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "create-post.html"));
});

router.post("/create-post", async (req, res) => {
    console.log(req.body.title, req.body.content);
    let postData = new Post({
        title: req.body.title,
        content: req.body.content,
        type: "Blog",
        author: "Mukul",
        date: new Date(),
        upvote: 0
    })
    // postData.save((err, post) => {
    //     if (err) 
    //         console.log(err);
    //      else {
    //         Post.find({}, (err, posts) => {
    //             if (err) 
    //                 console.log(err);
    //              else 
    //                 res.render("posts.ejs", {posts: posts})
    //         })
    //     }
    // })
    // .then(post => {
    //     console.log(post)
    // }).catch(err => console.log(err));
    // Post.create({
    //     title: req.body.title,
    //     content: req.body.content,
    //     type: "Blog",
    //     author: "Mukul",
    //     date: new Date(),
    //     upvote: 0
    // }).then(post => console.log(post)).catch(err => console.log(err))

    try {
        const post = await Post.create({
            title: req.body.title,
            content: req.body.content,
            type: "Blog",
            author: "Mukul",
            date: new Date(),
            upvote: 0
        })
        const posts = await Post.find({});
        console.log(posts);
        res.render("posts.ejs", {posts: posts});
    } catch (err) {
        console.log(err)
    }

    // res.render("blogs.ejs", {blogs: blogs});});module.exports = router;// Database , NoSQL , SQL , difference , Tables , Indexing})})
})

module.exports = router
