const Post = require('../models/post')
const User = require('../models/user')

async function index (req, res) {
    try {
        const userId = await User.id
        const posts = await Post.getAllFromId(userId)
        res.json(posts)
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function create (req, res) {
    try {
        const data = req.body
        const result = await Post.create(data)
        res.status(201).send(result)
    } catch (err) {
        res.status(400).json({"error": err.message})
    }
}

async function show (req, res) {
    try {
        const id = parseInt(req.params.id)
        const post = await Post.getOneById(id)
        res.json(post)
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function update (res, res) {
    try {
        const id = parseInt(req.params.id)
        

    } catch (err) {

    }
}

async function destroy (req, res) {
    try {
        const id = parseInt(req.params.id)
        const post = Post.getOneById(id)
        const result = await post.destroy()
        res.status(404).json({"error": err.message})
        res.status(204).end()
    } catch (err) {
        res.status(404).json({"error": err.message})
    }

}

module.exports = {index, create, show, update, destroy}
