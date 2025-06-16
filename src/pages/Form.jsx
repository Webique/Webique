// src/pages/Form.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Form() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const selected = query.get("service") || "";

  const [form, setForm] = useState({
    email: "",
    idea: "",
    service: selected
  });

  const isRTL = i18n.language === "ar";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📬 Form submitted!");
  };

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center px-6 sm:px-12 py-16 ${
        isRTL ? "rtl text-right" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-2xl border border-accent/20"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-900">
          {t("formsPage.title")}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              {t("formsPage.email")}
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder={t("formsPage.email")}
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-black"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              {t("formsPage.service")}
            </label>
            <input
              type="text"
              name="service"
              value={t(`formsPage.services.${form.service}`) || form.service}
              readOnly
              className="w-full px-4 py-3 bg-gray-100 text-black rounded-lg border border-gray-200 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              {t("formsPage.idea")}
            </label>
            <textarea
              name="idea"
              rows="5"
              placeholder={t("formsPage.idea")}
              value={form.idea}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-black"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-accent text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {t("formsPage.submit")}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
