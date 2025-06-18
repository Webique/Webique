// backend/routes/contact.js
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact"); // or wherever your model is

router.post("/", async (req, res) => {
  const { email, phone } = req.body;
  if (!email && !phone) return res.status(400).json({ error: "Email or phone is required" });

  try {
    const contact = new Contact({ email, phone });
    await contact.save();
    res.status(200).json({ message: "Contact saved" });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Failed to save contact" });
  }
});

module.exports = router;
