import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import TextTransition, { presets } from "react-text-transition";
import ContactPopup from "../components/ContactPopup"; // adjust path if different

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [showPopup, setShowPopup] = useState(false);
  const [index, setIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  // Dynamically update service texts on language change
  const TEXTS = useMemo(() => [
    t("homePage.servicesSection.web"),
    t("homePage.servicesSection.brand"),
    t("homePage.servicesSection.marketing"),
    t("homePage.servicesSection.analytics")
  ], [t, i18n.language]);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex(i => (i + 1) % TEXTS.length), 4000);
    return () => clearInterval(intervalId);
  }, [TEXTS]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://webique.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("Submitted!");
        setEmail("");
        setPhone("");
        setShowPopup(false); // ✅ Closes popup
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("❌ Submit error", err);
      alert("Server error.");
    }
  };
  

  return (
    <>
{/* Hero Section */}
<div
  className="min-h-screen w-full flex items-center justify-center px-6 sm:px-12 py-36 sm:py-48 bg-cover bg-center"
  style={{ backgroundImage: "url('/pattern.jpg')" }}
>
  <div className="text-center max-w-4xl w-full">
    <motion.h1
      className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-center text-gray-900"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {t("homePage.hero.headline")}
      <span className="text-accent block mt-2">
        <TypeAnimation
          key={i18n.language}
          sequence={[
            t("homePage.hero.typewriter.0"), 3000,
            t("homePage.hero.typewriter.1"), 3000,
            t("homePage.hero.typewriter.2"), 3000,
          ]}
          speed={25}
          wrapper="span"
          repeat={Infinity}
        />
      </span>
    </motion.h1>

    <motion.p
      className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      {t("homePage.hero.description")}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <button
        onClick={() => setShowPopup(true)}
        className="px-6 py-3 bg-accent text-white rounded-full shadow-lg font-semibold text-lg hover:scale-105 transition-transform duration-300"
      >
        {t("homePage.hero.cta")}
      </button>
    </motion.div>
  </div>
</div>



{/* Trusted Companies Section */}
<section className="w-full py-12 px-0 sm:px-12 bg-white overflow-hidden">
  <div className="w-full text-center">
    <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-10 px-6 sm:px-0">
      {t("homePage.trustedBy")}
    </h2>

    {/* Desktop Grid */}
    <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center px-12">
      {[
        "client1.png",
        "client2.png",
        "client3.png",
        "client4.png",
        "client5.png",
        "client6.png",
      ].map((logo, idx) => (
        <img
          key={idx}
          src={`/logos/${logo}`}
          alt={`Client ${idx + 1}`}
          className="h-20 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      ))}
    </div>

    {/* Mobile Horizontal Marquee */}
    <div className="block md:hidden mt-4 relative overflow-hidden w-full">
      <div className="flex animate-marquee space-x-8 w-max px-6">
        {[
          "client1.png",
          "client2.png",
          "client3.png",
          "client4.png",
          "client5.png",
          "client6.png",
        ].map((logo, idx) => (
          <img
            key={idx}
            src={`/logos/${logo}`}
            alt={`Client ${idx + 1}`}
            className="h-16 w-auto opacity-80"
          />
        ))}
        {/* Repeat for seamless loop */}
        {[
          "client1.png",
          "client2.png",
          "client3.png",
          "client4.png",
          "client5.png",
          "client6.png",
        ].map((logo, idx) => (
          <img
            key={`repeat-${idx}`}
            src={`/logos/${logo}`}
            alt={`Client ${idx + 1}`}
            className="h-16 w-auto opacity-80"
          />
        ))}
      </div>
    </div>
  </div>
</section>
{/* Services Section */}
<section className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-6 sm:px-12">
  <div className={`max-w-6xl mx-auto flex flex-col ${isRTL ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16`}>

    {/* Left Text Content */}
    <div className="w-full md:w-1/2 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t("homePage.servicesSection.title")}
      </motion.h2>

      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full text-center">
          <span className="text-accent font-bold text-3xl sm:text-4xl inline-block">
            <TextTransition springConfig={presets.gentle}>
              {TEXTS[index]}
            </TextTransition>
          </span>
        </div>
      </motion.div>

      <motion.p
        className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
      >
        {t("homePage.servicesSection.description")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Link
          to="/services"
          className="px-6 py-3 bg-white text-gray-900 rounded-full shadow-lg font-semibold text-lg hover:scale-105 transition-transform duration-300"
        >
          {t("homePage.servicesSection.cta")}
        </Link>
      </motion.div>
    </div>

    {/* Right Image */}
    <motion.div
      className="w-full md:w-1/2"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      viewport={{ once: true }}
    >
      <img
        src="/images/services.png"
        alt="Our Services"
        className="rounded-2xl shadow-xl w-full object-cover max-h-[400px]"
      />
    </motion.div>
  </div>
</section>


{/* About Section */}
<section
  ref={ref}
  className="w-full px-6 sm:px-12 py-16 max-w-5xl mx-auto text-center"
>
  <motion.h2
    className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.9 }}
  >
    {t("homePage.aboutSection.title")}
  </motion.h2>

  <motion.p
    className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.9, duration: 1 }}
  >
    {t("homePage.aboutSection.description")}
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.9, duration: 0.8 }}
  >
    <Link
      to="/about"
      className="px-6 py-3 bg-accent text-white rounded-full shadow-lg font-semibold text-lg hover:scale-105 transition-transform duration-300"
    >
      {t("homePage.aboutSection.cta")}
    </Link>
  </motion.div>
</section>


{/* Global Reach Section */}
<section className="w-full bg-[#e6f2f1] py-20 px-6 sm:px-12 relative overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-16 min-h-[550px]">
    
    {/* Left Content */}
    <div className="w-full md:w-1/2 flex flex-col justify-between text-center md:text-left z-10">
      <h2 className="text-4xl sm:text-6xl font-black text-[#00323d] leading-tight mb-8">
        {t("homePage.globalSection.title")}
      </h2>

      <div className="text-[#00323d] text-lg sm:text-xl space-y-4 font-bold">
        <p>{t("homePage.globalSection.stat1")}</p>
        <p>{t("homePage.globalSection.stat2")}</p>
        <p>{t("homePage.globalSection.stat3")}</p>
      </div>
    </div>

    {/* Right Image */}
    <div className="w-full md:w-1/2 flex justify-center relative">
      <img
        src="/images/globe.png"
        alt="Global Reach"
        className="w-[130%] sm:w-full max-h-[500px] object-cover rounded-xl -mt-24 sm:mt-0 z-0"
      />
    </div>
  </div>
</section>




{/* Final CTA Section */}
<section className="w-full bg-[#00323d] text-white px-6 sm:px-12 py-24 text-center">
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto"
  >
    <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
      {t("homePage.finalCta.title")}
    </h2>
    <p className="text-lg sm:text-xl mb-10 text-white/90 max-w-2xl mx-auto">
      {t("homePage.finalCta.description")}
    </p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <button
        onClick={() => setShowPopup(true)}
        className="px-6 py-3 bg-accent text-white rounded-full shadow-lg font-semibold text-lg hover:scale-105 transition-transform duration-300"
      >
        {t("homePage.finalCta.cta")}
      </button>
    </motion.div>
  </motion.div>
</section>


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

    </>
  );
}
