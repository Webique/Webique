const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB error", err));

const Submission = mongoose.model("Submission", new mongoose.Schema({
  email: String,
  phone: String,
  createdAt: { type: Date, default: Date.now }
}));

app.post("/api/contact", async (req, res) => {
  const { email, phone } = req.body;
  if (!email && !phone) return res.status(400).json({ message: "Email or phone required." });

  try {
    await new Submission({ email, phone }).save();
    res.status(201).json({ message: "Saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
