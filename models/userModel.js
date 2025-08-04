const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({  // Creating user scheme
  name: { type: String, required: true },
  email: { type: String, required: true },
  role :{ type:String, required: true }, // Added role field with type String
  status: { type: String, default: 'Active' }, // Added status field with default value 'active'
  createdAt: { type: Date, default: Date.now }, // Added createdAt field with default value
});

module.exports = mongoose.model("User", userSchema); // Exporting the model
