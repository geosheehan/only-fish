const mongoose = require('mongoose')

// creates mongoose schema for users
// requires micorsoftID and displayname, both strings
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', UserSchema)
