const mongoose = require('mongoose')

// creates mongoose schema for todos
// saying the names of the object fields
//define what the fields contain and what is required when making an object
const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  microsoftId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
// 'todos' collection in MongoDB
// but 'Todo' schema in JS