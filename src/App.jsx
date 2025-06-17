// src/App.jsx
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Form from "./pages/Form";
import Work from "./pages/Work";



export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <Router>
      {/* ✅ Add 'relative' to ensure background pseudo-element works */}
      <div className="relative flex flex-col min-h-screen bg-transparent text-white">
        <Navbar />
        <main className="flex-1 pt-20">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/form" element={<Form />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Outlet />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
