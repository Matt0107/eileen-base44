import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Footer.css";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isDe = i18n.language === "de";

  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.about"), path: "/about" },
    { label: t("nav.media"), path: "/media" },
    { label: t("nav.calendar"), path: "/calendar" },
    { label: t("nav.contact"), path: "/contact" }
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Colonne 1 : nom */}
        <div className="footer-col">
          <h3 className="footer-title">Eileen Baum</h3>
          <p className="footer-sub">
            {isDe ? "Klassische Gitarristin" : "Classical Guitarist"}
          </p>
        </div>

        {/* Colonne 2 : navigation */}
        <div className="footer-col">
          <h4 className="footer-heading">
            {isDe ? "Navigation" : "Navigation"}
          </h4>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Colonne 3 : contact */}
        <div className="footer-col">
          <h4 className="footer-heading">
            {isDe ? "Kontakt" : "Contact"}
          </h4>
          <p className="footer-text">info@eileenbaum.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
