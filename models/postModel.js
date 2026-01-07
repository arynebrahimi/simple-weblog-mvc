const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const filePath = path.join(__dirname, "..", "data", "posts.json");

function readPosts() {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data || "[]");
}

function writePosts(posts) {
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
}

module.exports = {
  getAllPosts() {
    return readPosts();
  },

  getPostById(id) {
    const posts = readPosts();
    return posts.find((p) => p.id === id);
  },

  createPost(title, content) {
    const posts = readPosts();
    const newPost = {
      id: uuidv4(),
      title,
      content,
      createdAt: new Date().toLocaleString(),
    };
    posts.push(newPost);
    writePosts(posts);
  },

  updatePost(id, title, content) {
    const posts = readPosts();
    const index = posts.findIndex((p) => p.id === id);
    if (index === -1) return;

    posts[index].title = title;
    posts[index].content = content;
    writePosts(posts);
  },

  deletePost(id) {
    const posts = readPosts();
    const filtered = posts.filter((p) => p.id !== id);
    writePosts(filtered);
  },
};
