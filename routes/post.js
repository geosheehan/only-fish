const express = require('express')
const router = express.Router()

const postController = require('../controllers/post')
// requires that the user is logged in/authorized 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// @desc    Show create post page
// @route   GET /post
router.get('/', /*ensureAuth,*/ postController.showCreatePage);

// @desc    Process post creation
// @route   GET /post
router.post('/', /*ensureAuth,*/ postController.createPost);

// @desc    Show edit post page
// @route   GET /post/edit/:id
router.get('/edit/:id', postController.showEditPage);

// @desc    Process post edit
// @route   PUT /post/:id
router.put('/:id', postController.editPost);

// @desc    View a specific post
// @route   GET /post/:id
router.get('/:id', postController.viewPost);

// @desc    Delete a post
// @route   DELETE /post/:id
router.delete('/:id', postController.deletePost);

// @desc    Like a post
// @route   PUT /post/:id/like
router.put('/:id/like', postController.likePost);

module.exports = router;