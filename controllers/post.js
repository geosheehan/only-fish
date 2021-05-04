const Post = require('../models/Post');
const User = require('../models/User');

module.exports = {
    showCreatePage: (req, res) => {
        res.render('posts/create.ejs');
    },
    createPost: async (req, res) => {
        try {
            req.body.user = req.user._id;

            const post = await Post.create(req.body);
            res.redirect(`/post/${post._id}`);
        } catch (err) {
            console.error(err);
        }
    },
    viewPost: async (req, res) => {
        try {
            // Grab the post from Mongo using the provided id
            const post = await Post.findById(req.params.id);
            // Get additional data on the post author
            const author = await User.findById(post.user);
            // Pass the post object to the view.
            res.render('posts/view.ejs', { post, author, user: req.user });
        } catch (err) {
            res.render('errors/404.ejs')
            console.error(err);
        }
    },
    showEditPage: async (req, res) => {
        try {
            // Get post details to fill in page
            const post = await Post.findById(req.params.id);
            if (req.user.id !== post.user) return res.redirect(`/post/${req.params.id}`);
            // Display page with post data
            res.render('posts/edit.ejs', { id: req.params.id, post });
        } catch (err) {
            console.error(err);
        }
    },
    editPost: async (req, res) => {
        try {
            await Post.findOneAndUpdate({ _id: req.params.id }, req.body, {
                new: true,
                runValidators: true
            });
            res.redirect(`/post/${req.params.id}`);
        } catch (err) {
            console.error(err);
        }
    },
    deletePost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            if (req.user.id !== post.user) return res.redirect(`/post/${req.params.id}`);

            console.log(`Deleting Post ${req.params.id}`);
            await Post.deleteOne({ _id: req.params.id });
            res.redirect('/lake');
        } catch (err) {
            console.error(err);
        }
    },
    likePost: async (req, res) => {
        try {
            await Post.findOneAndUpdate(
              { _id: req.params.id },
              {
                $inc: { likes: 1 },
              }
            );
            console.log("Likes +1");
            res.redirect(`/post/${req.params.id}`);
          } catch (err) {
            console.log(err);
          }
    }
}









