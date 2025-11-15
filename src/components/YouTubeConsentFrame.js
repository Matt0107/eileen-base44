import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function YouTubeConsentFrame({ url, title }) {
  const { t } = useTranslation();
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") {
      setHasConsent(true);
    }
  }, []);

  const handleAcceptHere = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setHasConsent(true);
  };

  if (!hasConsent) {
    return (
      <div className="media-video-placeholder">
        <p className="media-video-placeholder-text">
          {t("media.cookiesPlaceholder")}
        </p>
        <button
          type="button"
          className="media-video-consent-button"
          onClick={handleAcceptHere}
        >
          {t("media.cookiesAcceptButton")}
        </button>
      </div>
    );
  }

  return (
    <iframe
      className="media-video"
      src={url}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
