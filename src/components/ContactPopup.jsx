import React from "react";

export default function ContactPopup({ onClose, email, phone, setEmail, setPhone, onSubmit }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Contact Us</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone (optional)"
            className="w-full px-4 py-2 border rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#D69D70] text-white rounded-md hover:bg-[#bb865c]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
