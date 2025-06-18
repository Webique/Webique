// backend/models/Contact.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  email: { type: String },
  phone: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Contact", contactSchema);
