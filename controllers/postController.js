const Post = require("../model/post");

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Post.find({});
        res.render("blog.ejs", {blogs});
    } catch (err) {
        console.log(err);
    }
};

exports.getAllNotices = (req, res) => {
    res.render("notice.ejs");
};
