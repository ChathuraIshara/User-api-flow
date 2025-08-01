const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({  // Creating user scheme
  name: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema); // Exporting the model
