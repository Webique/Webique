// Home.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import TextTransition, { presets } from "react-text-transition";

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Scramble words for services section
  const TEXTS = [
    t("servicesSection.web"),
    t("servicesSection.brand"),
    t("servicesSection.marketing"),
    t("servicesSection.analytics")
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex(i => (i + 1) % TEXTS.length), 4000);
    return () => clearInterval(intervalId);
  }, [i18n.language]);

  return (
    <>
      {/* Hero Section */}
      <div
  className="min-h-screen w-full flex items-center justify-center px-6 sm:px-12 bg-cover bg-center"
  style={{ backgroundImage: "url('/pattern.jpg')" }}
>
        <div className="text-center max-w-4xl w-full">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-center text-gray-900"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t("hero.headline")}{" "}
            <span className="text-accent">
              <TypeAnimation
                key={i18n.language}
                sequence={[
                  ...t("hero.typewriter", { returnObjects: true }).flatMap(word => [word, 3000])
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
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Link
              to="/services"
              className="px-6 py-3 bg-accent text-white rounded-full shadow-lg font-semibold text-lg hover:scale-105 transition-transform duration-300"
            >
              {t("hero.cta")}
            </Link>
          </motion.div>
        </div>
      </div>


{/* Trusted Companies Section */}
<section className="w-full py-12 px-0 sm:px-12 bg-white overflow-hidden">
  <div className="w-full text-center">
    <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-10 px-6 sm:px-0">
      {t("home.trustedBy", "Empowering businesses through web, branding, and marketing solutions")}
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
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
    
    {/* Left Text Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
<motion.h2
  className="text-3xl sm:text-4xl font-bold mb-6"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {t("servicesSection.title")}
  <span className="block w-full flex justify-center md:justify-start mt-2">
    <span className="text-accent font-bold text-3xl sm:text-4xl">
      <TextTransition springConfig={presets.gentle}>
        {TEXTS[index]}
      </TextTransition>
    </span>
  </span>
</motion.h2>


      <motion.p
        className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        {t("servicesSection.description")}
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
          {t("servicesSection.cta")}
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
        src="/images/services.jpg"
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
          {t("aboutSection.title")}
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 1 }}
        >
          {t("aboutSection.description")}
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
            {t("aboutSection.cta")}
          </Link>
        </motion.div>
      </section>







{/* Global Reach Section */}
<section className="w-full bg-[#e6f2f1] py-20 px-6 sm:px-12 relative overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-16 min-h-[550px]">
    
    {/* Left Content */}
    <div className="w-full md:w-1/2 flex flex-col justify-between text-center md:text-left z-10">
      {/* Title */}
      <h2 className="text-4xl sm:text-6xl font-black text-[#00323d] leading-tight mb-8">
        Powering digital growth<br />across the Middle East
      </h2>

      {/* Stats */}
      <div className="text-[#00323d] text-lg sm:text-xl space-y-4 font-bold">
        <p>40+ completed digital projects</p>
        <p>Operations in 4 countries and expanding</p>
        <p>Strategic partnerships in web development, branding, and marketing</p>
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
      Discover the most effective digital partner in the Middle East
    </h2>
    <p className="text-lg sm:text-xl mb-10 text-white/90 max-w-2xl mx-auto">
      From sleek websites to strategic marketing campaigns — Webique powers your business growth.
    </p>
    <Link
      to="/contact"
      className="inline-block px-8 py-4 bg-[#D69D70] text-black font-semibold rounded-full shadow-lg text-lg hover:scale-105 transition-transform duration-300"
    >
      Get a Free Consultation
    </Link>
  </motion.div>
</section>



    </>
  );
}
