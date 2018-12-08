const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  lastName: String,
  age: Number,
  dateBirth: String,
}, {
  timestamps: true,
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;