import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/CookieBanner.css";

export default function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-text">
        {t("cookies.text")}
      </p>

      <div className="cookie-buttons">
        <button className="cookie-btn accept" onClick={handleAccept}>
          {t("cookies.accept")}
        </button>
        <button className="cookie-btn reject" onClick={handleReject}>
          {t("cookies.reject")}
        </button>
      </div>
    </div>
  );
}
