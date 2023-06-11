const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
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
    abstractLink: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("hackofest", userSchema);
