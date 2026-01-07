const Post = require("../models/postModel");

module.exports = {
  home(req, res) {
    const posts = Post.getAllPosts();
    const totalPosts = posts.length;
    res.render("index", { posts, totalPosts });
  },
  

  create(req, res) {
    const { title, content } = req.body;
    Post.createPost(title, content);
    res.redirect("/");
  },

  showEdit(req, res) {
    const post = Post.getPostById(req.params.id);
    res.render("edit", { post });
  },

  update(req, res) {
    const { title, content } = req.body;
    Post.updatePost(req.params.id, title, content);
    res.redirect("/");
  },

  delete(req, res) {
    Post.deletePost(req.params.id);
    res.redirect("/");
  },
};
