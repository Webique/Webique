// src/pages/Home.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";


export default function Home() {
  const { t } = useTranslation();
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">{t("home")}</h1>
      <p className="text-lg">{t("welcome")}</p>
    </section>
  );
}
