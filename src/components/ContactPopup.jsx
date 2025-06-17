import React, { useState } from "react";

export default function ContactPopup({ onClose }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // ✅ For success message

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !phone) {
      setError("Please enter both email and phone number.");
      return;
    }

    setError("");
    console.log("Submitted:", { email, phone });

    // ✅ Show success message instead of closing
    setSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg">
        {success ? (
          <div className="text-center text-gray-800 space-y-4">
            <h2 className="text-2xl font-semibold">Thank you!</h2>
            <p className="text-base">
              We’ll reach out to you within 2 days via the contact details you provided.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
