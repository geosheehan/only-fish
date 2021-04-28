const mongoose = require('mongoose')

// creates mongoose schema for users
// requires micorsoftID and displayname, both strings
const UserSchema = new mongoose.Schema({
  microsoftId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('User', UserSchema)
