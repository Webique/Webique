// src/pages/About.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";



export default function About() {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null); // ✅ Single hook at top level

  const founders = [
    {
      name: "Yosuf",
      image: "/founders/yosuf.jpg",
      description: t("aboutPage.founders.yosuf"),
      linkedin: "https://www.linkedin.com/in/yosuf",
      instagram: "https://www.instagram.com/yosuf",
      whatsapp: "https://wa.me/201234567890"
    },
    {
      name: "Co-Founder 2",
      image: "/founders/founder2.jpg",
      description: t("aboutPage.founders.founder2"),
      linkedin: "https://www.linkedin.com/in/founder2",
      instagram: "https://www.instagram.com/founder2",
      whatsapp: "https://wa.me/966500000000"
    },
    {
      name: "Co-Founder 3",
      image: "/founders/founder3.jpg",
      description: t("aboutPage.founders.founder3"),
      linkedin: "https://www.linkedin.com/in/founder3",
      instagram: "https://www.instagram.com/founder3",
      whatsapp: "https://wa.me/962790000000"
    }
  ];
  

  const values = [
    { icon: <FaLightbulb size={36} />, title: t("aboutPage.creativity") },
    { icon: <FaRocket size={36} />, title: t("aboutPage.innovation") },
    { icon: <FaHandshake size={36} />, title: t("aboutPage.integrity") }
  ];

  return (
    <div className="w-full px-6 sm:px-12 py-16 max-w-7xl mx-auto">
      
      {/* Our Story */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          {t("aboutPage.ourStory")}
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          {t("aboutPage.storyText")}
        </p>
      </motion.div>

      {/* Co-Founders Section - Expand on Hover (No Shared State) */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
>
  {founders.map((founder, idx) => (
    <motion.div
      key={idx}
      whileHover={{ scale: 1.03 }}
      className="group bg-white rounded-3xl shadow-xl transition-all duration-500 overflow-hidden"
    >
      {/* Main Card Content */}
      <div className="p-6 flex flex-col items-center text-center">
        <img
          src={founder.image}
          alt={founder.name}
          className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-accent shadow"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
  {founder.name}
</h3>
<div className="flex justify-center gap-4">
  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gray-800 transition">
    <FaLinkedin size={20} />
  </a>
  <a href={founder.instagram} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gray-800 transition">
    <FaInstagram size={20} />
  </a>
  <a href={founder.whatsapp} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gray-800 transition">
    <FaWhatsapp size={20} />
  </a>
</div>

      </div>

      {/* Hidden Description - Expands only when hovered */}
      <div className="max-h-0 group-hover:max-h-32 group-hover:py-4 transition-all duration-500 ease-in-out px-6 overflow-hidden opacity-0 group-hover:opacity-100">
        <p className="text-sm sm:text-base text-gray-700 text-center">
          {founder.description}
        </p>
      </div>
    </motion.div>
  ))}
</motion.div>


      {/* What We Stand For */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          {t("aboutPage.standForTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white shadow-lg border border-gray-200 rounded-xl flex flex-col items-center"
            >
              <div className="text-accent mb-4 flex justify-center">{val.icon}</div>
              <div className="text-lg font-semibold text-gray-800 text-center">{val.title}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-xl sm:text-2xl font-medium mb-6 text-gray-800">
          {t("aboutPage.ctaText")}
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-accent text-white rounded-full shadow-lg font-semibold text-lg hover:scale-105 transition-transform duration-300"
        >
          {t("aboutPage.ctaBtn")}
        </a>
      </motion.div>
    </div>
  );
}
