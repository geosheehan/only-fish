const express = require('express')
const router = express.Router()

const postController = require('../controllers/post')
// requires that the user is logged in/authorized 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// @desc    Display page to create a post
// @route   GET /post
router.get('/', /*ensureAuth,*/ postController.addPost);

// @desc    Create a post
// @route   GET /post
router.post('/', /*ensureAuth,*/ postController.createPost);

// @desc    View a specific post
// @route   GET /post/:id
router.get('/:id', postController.viewPost);

// @desc    Edit a specific post
// @route   PUT /post/:id
router.put('/:id', postController.editPost);

// @desc    Delete a post
// @route   DELETE /post/:id
router.delete('/:id', postController.deletePost);

// @desc    Like a post
// @route   PUT /post/:id/like
router.put('/:id/like', postController.likePost);

module.exports = router;