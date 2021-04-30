const mongoose = require('mongoose');
const Post = require('../models/Post');

module.exports = {
    addPost: (req, res) => {
        res.render('posts/create.ejs');
    },
    createPost: async (req, res) => {
        try {
            // TODO: Do this but with a real MongoDB ObjectId for a user
            // req.body.user = '123'; // req.user.id;
            const postId = await Post.create(req.body);
            res.redirect(`/post/${postId}`);
        } catch (err) {
            console.error(err);
        }
    },
    viewPost: async (req, res) => {
        try {
            // Grab the post from Mongo using the provided id

            // TODO: Connect to the Post model and render it's data
            const post = {};
            // Pass the post object to the view.
            res.render('posts/view.ejs', { id: req.params.id });
        } catch (err) {
            console.error(err);
        }
    },
    editPost: async (req, res) => {
        try {
            // await Post.findOneAndUpdate({_id: req.params.id});
            console.log(`Edited Post ${req.params.id}`);
            // TODO: Change this to profile/dashboard/etc.
            res.render('posts/edit.ejs', { id: req.params.id });
        } catch (err) {
            console.error(err);
        }
    },
    deletePost: async (req, res) => {
        try {
            console.log(`Deleting Post ${req.params.id}`);
            // TODO: Change this to profile/dashboard/etc.
            res.redirect('/');
        } catch (err) {
            console.error(err);
        }
    },
    likePost: async (req, res) => {
        try {
            // TODO: Add like system to post
            // Get the post from Mongo with the given id
            // Increment/Decrement the number of likes
            // Update the post
            console.log('Updating the number of likes');
            // Redirect to the post page
            res.redirect(`/post/${req.params.id}`);
        } catch (err) {
            console.error(err);

        }
    }
}
    
    







