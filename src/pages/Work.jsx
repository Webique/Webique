import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  { name: "Padel Point SA", url: "https://www.padelpointsa.com", img: "/placeholder.png" },
  { name: "Green Lavender Society", url: "https://greenlavender-society.com", img: "/placeholder.png" },
  { name: "ONNN SA", url: "http://onnn-sa.com/", img: "/placeholder.png" },
  { name: "Ghameeq", url: "https://ghameeq.sa/", img: "/placeholder.png" },
  { name: "Shawarma Abu Elezz", url: "https://webique.github.io/ShawrmaAbuElezz/", img: "/placeholder.png" },
  { name: "Layali Masr", url: "https://layalimaser-sa.com/", img: "/placeholder.png" },
  { name: "FuegoSA", url: "https://fuegosa.com/", img: "/placeholder.png" },
  { name: "Hambella BH", url: "https://www.hambella-bh.com/", img: "/placeholder.png" },
  { name: "Cinema Al Balad", url: "http://cinemaalbalad.com/", img: "/placeholder.png" }
];

const SOCIAL_PROJECTS = [
  { name: "FuegoSA Instagram", url: "https://www.instagram.com/fuegosa.ksa/", img: "/placeholder.png" },
  { name: "Layali Masr Instagram", url: "https://www.instagram.com/layalimasr.sa/", img: "/placeholder.png" },
  { name: "Cinema Al Balad IG", url: "https://www.instagram.com/cinemaalbalad/", img: "/placeholder.png" },
  { name: "Padel Point", url: "https://www.instagram.com/padelpoint.sa/", img: "/placeholder.png" }
];

export default function Work() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [showWeb, setShowWeb] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div className={`min-h-screen px-6 sm:px-12 py-20 text-gray-900 bg-transparent ${isRTL ? "rtl text-right" : ""}`}>
      
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{t("workPage.title")}</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
          {t("workPage.description")}
        </p>
      </div>

      <div className="sm:hidden text-center mb-8">
        <button
          onClick={() => setShowWeb(prev => !prev)}
          className="bg-[#D69D70] text-white px-6 py-2 rounded-xl font-semibold transition hover:opacity-90"
        >
          {showWeb ? t("workPage.hideWeb") : t("workPage.showWeb")}
        </button>
      </div>

      <AnimatePresence>
        {(showWeb || window.innerWidth >= 640) && (
          <motion.div
            key="websites"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D69D70] hidden sm:block" />
              <div className="space-y-24 relative z-10">
                {PROJECTS.map((project, index) => {
                  const isEven = index % 2 === 0;
                  const alignLeft = isRTL ? !isEven : isEven;
                  return (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, x: alignLeft ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className={`flex flex-col sm:flex-row items-center gap-6 ${
                        alignLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                      }`}
                    >
                      <div className="flex-shrink-0 w-full sm:w-1/2">
                        <img
                          src={project.img}
                          alt={project.name}
                          className="rounded-2xl shadow-lg w-full h-60 object-cover"
                        />
                      </div>
                      <div className="w-full sm:w-1/2 text-center sm:text-left">
                        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D69D70] font-medium text-lg hover:underline"
                        >
                          {t("workPage.visit")}
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-28 mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t("workPage.socialTitle")}</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">{t("workPage.socialDescription")}</p>
      </div>

      <div className="sm:hidden text-center mb-8">
        <button
          onClick={() => setShowSocial(prev => !prev)}
          className="bg-[#D69D70] text-white px-6 py-2 rounded-xl font-semibold transition hover:opacity-90"
        >
          {showSocial ? t("workPage.hideSocial") : t("workPage.showSocial")}
        </button>
      </div>

      <AnimatePresence>
        {(showSocial || window.innerWidth >= 640) && (
          <motion.div
            key="social"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D69D70] hidden sm:block" />
              <div className="space-y-24 relative z-10">
                {SOCIAL_PROJECTS.map((project, index) => {
                  const isEven = index % 2 === 0;
                  const alignLeft = isRTL ? !isEven : isEven;
                  return (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, x: alignLeft ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className={`flex flex-col sm:flex-row items-center gap-6 ${
                        alignLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                      }`}
                    >
                      <div className="flex-shrink-0 w-full sm:w-1/2">
                        <img
                          src={project.img}
                          alt={project.name}
                          className="rounded-2xl shadow-lg w-full h-60 object-cover"
                        />
                      </div>
                      <div className="w-full sm:w-1/2 text-center sm:text-left">
                        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D69D70] font-medium text-lg hover:underline"
                        >
                          {t("workPage.visit")}
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
