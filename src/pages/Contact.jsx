// src/pages/Contact.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className={`min-h-screen flex items-center justify-center px-6 sm:px-12 py-20 bg-white ${isRTL ? "rtl text-right" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl text-gray-900"
      >
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            {t("contactPage.title")}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t("contactPage.description")}
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Email Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="glass-card p-8 rounded-3xl shadow-xl border border-gray-200 backdrop-blur-sm bg-white/70 hover:shadow-2xl transition-all"
          >
            <div className="flex flex-col items-center">
              <FaEnvelope className="text-accent text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("contactPage.email")}</h3>
              <a
                href="mailto:startwithwebique@gmail.com"
                className="text-accent text-lg hover:underline text-center break-words"
              >
                startwithwebique@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="glass-card p-8 rounded-3xl shadow-xl border border-gray-200 backdrop-blur-sm bg-white/70 hover:shadow-2xl transition-all"
          >
            <div className="flex flex-col items-center">
              <FaPhoneAlt className="text-accent text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("contactPage.phone")}</h3>
              <p className="text-gray-700">+966 56 172 2933</p>
              <p className="text-gray-700">+966 55 842 6221</p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <a
            href="mailto:startwithwebique@gmail.com"
            className="inline-block px-8 py-4 bg-accent text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {t("contactPage.cta")}
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
