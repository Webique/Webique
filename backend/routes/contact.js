// backend/routes/contact.js
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const { email, phone } = req.body;

    if (!email && !phone) {
      return res.status(400).json({ error: "Email or phone is required." });
    }

    const newContact = new Contact({ email, phone });
    await newContact.save();
    res.status(201).json({ message: "Submitted successfully" });
  } catch (err) {
    console.error("Contact submission error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
