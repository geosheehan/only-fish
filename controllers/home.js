const Post = require('../models/Post')

// exporting getIndex
module.exports = {
    getIndex: (req,res)=>{
      // telling response to renders index ejs
        res.render('index.ejs')
    },
    getPond: async (req, res) => {
      try {
          // const posts =  await Post.find({ user: req.params.id })
          res.render('pond.ejs', { id: req.params.id })
      } catch (err) {
          console.error(err)
      }
  }
}
