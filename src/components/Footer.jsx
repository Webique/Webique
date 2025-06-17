import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaLinkedin,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      className="w-full bg-white/70 backdrop-blur-md border-t border-[#D69D70] shadow-inner pt-8"
    >
      <div className="max-w-7xl mx-auto px-4 pb-6 flex flex-col md:flex-row justify-between items-start gap-6 text-black">
      {/* Contact Info */}
<div className="flex-1 space-y-2">
  <h4 className="text-lg font-bold text-black">Webique</h4>
  <p className="flex items-center gap-2 text-sm">
    <FaMapMarkerAlt className="text-[#D69D70]" />
    Manchester, United Kingdom
  </p>
  <a
    href="tel:+966558426221"
    className="flex items-center gap-2 text-sm hover:text-[#D69D70] transition"
  >
    <FaPhoneAlt className="text-[#D69D70]" />
    +966 558 426 221
  </a>
  <a
    href="mailto:startwithwebique@gmail.com"
    className="flex items-center gap-2 text-sm hover:text-[#D69D70] transition break-all"
  >
    <FaEnvelope className="text-[#D69D70]" />
    startwithwebique@gmail.com
  </a>
</div>


        {/* Links */}
        <div className="flex-1 space-y-2 text-sm">
          <a href="/privacy" className="block hover:text-[#D69D70] transition duration-300 font-medium">
            {t("privacy") || "Privacy Policy"}
          </a>
          <a href="/terms" className="block hover:text-[#D69D70] transition duration-300 font-medium">
            {t("terms") || "Terms of Service"}
          </a>
        </div>

        {/* Social + Scroll */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4 text-[#D69D70] text-xl">
            <a
              href="https://instagram.com/startwithwebique"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com/@startwithwebique"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition duration-300"
            >
              <FaTiktok />
            </a>
            <a
              href="https://wa.me/966558426221"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition duration-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/webique-agency-05b207348"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="text-[#D69D70] hover:text-black transition duration-300 text-sm flex items-center gap-1"
          >
            <FaArrowUp />
            {t("backToTop") || "Back to Top"}
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#D69D70] text-center text-sm py-4 text-black bg-white/50">
        &copy; {new Date().getFullYear()} Webique. {t("allRightsReserved") || "All rights reserved."}
      </div>
    </motion.footer>
  );
};

export default Footer;
