const mongoose = require('mongoose')

// creates mongoose schema for users
// requires micorsoftID and displayname, both strings
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', UserSchema)
