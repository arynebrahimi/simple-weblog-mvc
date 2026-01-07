const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController");

// Home Page
router.get("/", controller.home);

// Create Post
router.post("/posts", controller.create);

// Edit page
router.get("/posts/:id/edit", controller.showEdit);

// Update Post
router.put("/posts/:id", controller.update);

// Delete Post
router.delete("/posts/:id", controller.delete);

module.exports = router;
