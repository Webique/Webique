// src/pages/Services.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaCogs,
  FaServer,
  FaImages,
  FaCalendarAlt,
  FaBolt
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSelect = (key) => {
    navigate(`/form?service=${encodeURIComponent(key)}`);
  };

  const websiteServices = [
    {
      key: "website-basic",
      title: t("servicesPage.website.basicTitle"),
      icon: <FaGlobe size={32} />,
      desc: t("servicesPage.website.basicDesc")
    },
    {
      key: "website-standard",
      title: t("servicesPage.website.standardTitle"),
      icon: <FaCogs size={32} />,
      desc: t("servicesPage.website.standardDesc")
    },
    {
      key: "website-premium",
      title: t("servicesPage.website.premiumTitle"),
      icon: <FaServer size={32} />,
      desc: t("servicesPage.website.premiumDesc")
    }
  ];

  const socialServices = [
    {
      key: "social-basic",
      title: t("servicesPage.social.basicTitle"),
      icon: <FaImages size={32} />,
      desc: t("servicesPage.social.basicDesc")
    },
    {
      key: "social-standard",
      title: t("servicesPage.social.standardTitle"),
      icon: <FaCalendarAlt size={32} />,
      desc: t("servicesPage.social.standardDesc")
    },
    {
      key: "social-ondemand",
      title: t("servicesPage.social.ondemandTitle"),
      icon: <FaBolt size={32} />,
      desc: t("servicesPage.social.ondemandDesc")
    }
  ];

  return (
    <div className="w-full px-6 sm:px-12 py-16 max-w-7xl mx-auto text-black">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          {t("servicesPage.title")}
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          {t("servicesPage.subtitle")}
        </p>
      </motion.div>

      {/* Website Services */}
      <Section
        title={t("servicesPage.website.title")}
        items={websiteServices}
        onSelect={handleSelect}
      />

      {/* Social Media Services */}
      <Section
        title={t("servicesPage.social.title")}
        items={socialServices}
        onSelect={handleSelect}
      />
    </div>
  );
}

// 🔁 Reusable Section Component
function Section({ title, items, onSelect }) {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg border text-center transition-all"
          >
            <div className="text-accent mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{service.desc}</p>
            <button
              onClick={() => onSelect(service.key)}
              className="mt-2 px-4 py-2 bg-accent text-white rounded-full hover:scale-105 transition-transform"
            >
              Choose This Package
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
