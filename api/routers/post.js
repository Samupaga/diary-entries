const { Router } = require("express");

const postController = require("../controllers/post.js");
const authenticator = require("../middleware/authenticator");

const postRouter = Router();


postRouter.get("/", authenticator, postController.index) // get all posts
postRouter.post("/", authenticator, postController.create) // add a post
postRouter.get("/:id", authenticator, postController.show) // get a post by id
postRouter.patch("/:id", authenticator, postController.update) // update a post
postRouter.delete("/:id", authenticator, postController.destroy) // delete a post

module.exports = postRouter;
