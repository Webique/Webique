import React, { useState } from "react";

export default function ContactPopup({ onClose }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Require BOTH fields
    if (!email || !phone) {
      setError("Please enter both email and phone number.");
      return;
    }

    setError("");
    console.log("Submitted:", { email, phone });
    onClose(); // close the popup
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Let’s Work Together</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <input
  type="email"
  placeholder="Email"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
<input
  type="tel"
  placeholder="Phone Number"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  required
/>

          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-accent text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Submit
          </button>
          <button
            type="button"
            className="w-full text-gray-500 mt-2 hover:underline text-sm"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
