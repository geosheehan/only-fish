const User = require('../models/User')
const Post = require('../models/Post')

// exporting getIndex
module.exports = {
  getIndex: (req,res)=>{
    // telling response to renders index ejs
      res.render('login.ejs')
  },
  getPond: async (req, res) => {
    try {
      const author =  await User.findOne({ userName: req.params.username })
      if (null === author) return res.render('../views/errors/404');

      const posts = await Post.find({ user: author._id })
      res.render('pond.ejs', { author, posts, user: req.user })
    } catch (err) {
        console.error(err)
    }
  },
  getLake: async (req, res) => {
    try {
      const publicPost = await Post.find({ status : "public" })
      const ids = publicPost.map(post => {
        return post.user
      })
      const userNameArr = [];
      for(let i = 0; i < ids.length; i++) {
        const results = await User.findOne({ _id: ids[i] });

        if (results === null) continue;
        userNameArr.push(results.userName);
      }
      res.render('lake.ejs', { posts: publicPost, userNameArr })
    } catch (err) {
      console.error(err)
    }
  }
}
