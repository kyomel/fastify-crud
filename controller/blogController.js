const boom = require('boom')
const Blog = require('../model/Post')

// Get all post
exports.getAllPost = async(req, reply) => {
    try {
       let posts = await Blog.find()
       return posts 
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single post by id
exports.getSinglePost = async(req, reply) => {
    try {
        const id = req.params.id
        let post = await Blog.findById(id)
        return post
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Create Post
exports.addNewPost = async(req, reply) => {
    try {
        let post = new Blog(req.body)
        let newPost = await post.save()
        return newPost
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update Post
exports.updatePost = async(req, reply) => {
    try {
        const id = req.params.id
        let result = await Blog.findByIdAndUpdate(id, req.body, {
            new: true
        })
        return result
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete Post
exports.deletePost = async(req, reply) => {
    try {
        const id = req.params.id
        let result = await Blog.findByIdAndDelete(
            id
        )
        return {Message: "Post Deleted"}
    } catch (err) {
        throw boom.boomify(err)
    }
}