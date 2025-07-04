import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaServer,
  FaCode,
  FaGlobe,
  FaBullhorn,
  FaPalette,
  FaChartBar,
} from "react-icons/fa";
import ContactPopup from "../components/ContactPopup";

export default function Services() {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("https://webique.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone }),
      });

      const data = await res.json();

      if (res.ok) {
        setEmail("");
        setPhone("");
        return true;
      } else {
        console.error(data.message || "Submission failed");
        return false;
      }
    } catch (err) {
      console.error("❌ Submit error", err);
      return false;
    }
  };

  const services = [
    {
      title: t("servicesPage.grid.customWeb.title"),
      icon: <FaCode size={32} />,
      description: t("servicesPage.grid.customWeb.desc"),
    },
    {
      title: t("servicesPage.grid.internalSystems.title"),
      icon: <FaServer size={32} />,
      description: t("servicesPage.grid.internalSystems.desc"),
    },
    {
      title: t("servicesPage.grid.domainHosting.title"),
      icon: <FaGlobe size={32} />,
      description: t("servicesPage.grid.domainHosting.desc"),
    },
    {
      title: t("servicesPage.grid.socialMedia.title"),
      icon: <FaPalette size={32} />,
      description: t("servicesPage.grid.socialMedia.desc"),
    },
    {
      title: t("servicesPage.grid.adCampaigns.title"),
      icon: <FaBullhorn size={32} />,
      description: t("servicesPage.grid.adCampaigns.desc"),
    },
    {
      title: t("servicesPage.grid.analytics.title"),
      icon: <FaChartBar size={32} />,
      description: t("servicesPage.grid.analytics.desc"),
    },
  ];

  return (
    <div className="w-full px-6 sm:px-12 py-16 max-w-7xl mx-auto text-black">
      {/* Header */}
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

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg border text-center transition-all"
          >
            <div className="text-accent mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {service.title}
            </h3>
            <p className="text-sm text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => setShowPopup(true)}
          className="px-6 py-3 bg-accent text-white rounded-full shadow-lg font-semibold text-lg hover:scale-105 transition-transform duration-300"
        >
          {t("servicesPage.cta")}
        </button>
      </motion.div>

      {showPopup && (
        <ContactPopup
          onClose={() => setShowPopup(false)}
          email={email}
          phone={phone}
          setEmail={setEmail}
          setPhone={setPhone}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
