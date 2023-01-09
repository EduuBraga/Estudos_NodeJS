const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  email: { type: String, required: true, minlength: 3, maxlength: 100 },
  password: { type: String, required: true, minlength: 6, maxlength: 20 },
  createdAt: { type: Date, default: Date.now }
});

const userModel = model('users', userSchema);

module.exports = userModel;