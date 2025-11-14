import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const { i18n, t } = useTranslation();

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.media"), path: "/media" },
    { name: t("nav.calendar"), path: "/calendar" },
    { name: t("nav.contact"), path: "/contact" }
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "de" ? "en" : "de");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Ligne du haut : logo + langue */}
        <div className="navbar-top">
          <Link to="/" className="navbar-logo">
            Eileen Baum
          </Link>

          <button
            onClick={toggleLanguage}
            className="lang-button"
            aria-label="Toggle language"
          >
            <Globe size={18} />
            {i18n.language.toUpperCase()}
          </button>
        </div>

        {/* Ligne du bas : liens de navigation */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`navbar-link ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
