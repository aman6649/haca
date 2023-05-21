const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  clg: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  TsacId: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("hackofest", userSchema);
