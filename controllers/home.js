const Post = require('../models/Post')

// exporting getIndex
module.exports = {
    getIndex: (req,res)=>{
      // telling response to renders index ejs
        res.render('login.ejs')
    },
    getPond: async (req, res) => {
      try {
          // const posts =  await Post.find({ user: req.params.id })
          res.render('pond.ejs', { id: req.params.id })
      } catch (err) {
          console.error(err)
      }
  },
  getLake: async (req, res) => {
    try {
<<<<<<< HEAD
      // return user profile
      //render login
    }
    catch (err) {
=======
      res.render('lake.ejs', { id: req.params.id })
    } catch (err) {
>>>>>>> c102a5f5cc704a5cd525a81b43d567af7c38cebd
      console.error(err)
    }
  }
}
