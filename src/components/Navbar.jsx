import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import i18n from "../i18n";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [lang, setLang] = useState(i18n.language);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nLang", newLang); // ✅ Save selected lang
  };
  

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("services"), href: "/services" },
    { label: t("work"), href: "/work" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-[999] bg-white/80 backdrop-blur-lg shadow-xl border-b border-[#D69D70]"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="/" className="flex items-center gap-2">
          <motion.img
            src="/logo.jpg"
            alt="Webique Logo"
            className="h-12 w-auto object-contain drop-shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </a>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-[#D69D70] hover:text-black transition duration-300"
            aria-label="Toggle Language"
          >
            <FaGlobe className="text-xl" />
          </button>

          {isMobile ? (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#D69D70] hover:text-black transition duration-300"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          ) : (
            <motion.nav
              className="hidden md:flex gap-10 text-sm font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative text-black hover:text-[#D69D70] transition duration-300 ${
                    location.pathname === item.href ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#D69D70]" : ""
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white/90 md:hidden overflow-hidden px-6 pb-4 pt-2 border-t border-[#D69D70]"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block py-2 text-black hover:text-[#D69D70] transition duration-300 font-medium ${
                  location.pathname === item.href ? "underline underline-offset-8" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
