import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className={`min-h-screen px-6 sm:px-12 py-20 bg-white ${isRTL ? "rtl text-right" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl mx-auto text-gray-900"
      >
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            {t("contactPage.title")}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("contactPage.subtitle")}
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {/* Email */}
          <a
            href="mailto:startwithwebique@gmail.com"
            className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition"
          >
            <FaEnvelope className="text-accent text-2xl" />
            <div>
              <p className="font-semibold text-lg">{t("contactPage.email.title")}</p>
              <p className="text-gray-700 text-sm break-words" dir="ltr">
                startwithwebique@gmail.com
              </p>
            </div>
          </a>

          {/* Phone – Website */}
          <a
            href="tel:+966558426221"
            className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition"
          >
            <FaPhoneAlt className="text-accent text-2xl" />
            <div>
              <p className="font-semibold text-lg">{t("contactPage.websitePhone.title")}</p>
              <p className="text-gray-700 text-sm" dir="ltr">+966 55 842 6221</p>
            </div>
          </a>

          {/* Phone – Marketing */}
          <a
            href="tel:+966561722933"
            className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition"
          >
            <FaPhoneAlt className="text-accent text-2xl" />
            <div>
              <p className="font-semibold text-lg">{t("contactPage.marketingPhone.title")}</p>
              <p className="text-gray-700 text-sm" dir="ltr">+966 56 172 2933</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/966558426221"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition"
          >
            <FaWhatsapp className="text-accent text-2xl" />
            <div>
              <p className="font-semibold text-lg">{t("contactPage.whatsapp.title")}</p>
              <p className="text-gray-700 text-sm" dir="ltr">+966 55 842 6221</p>
            </div>
          </a>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">{t("contactPage.followUs")}</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="https://www.instagram.com/startwithwebique" target="_blank" rel="noopener noreferrer" className="text-accent text-2xl hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@startwithwebique" target="_blank" rel="noopener noreferrer" className="text-accent text-2xl hover:scale-110 transition">
              <FaTiktok />
            </a>
            <a href="https://www.linkedin.com/in/webique-agency-05b207348" target="_blank" rel="noopener noreferrer" className="text-accent text-2xl hover:scale-110 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
