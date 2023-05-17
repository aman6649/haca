const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model("tmt", userSchema);
