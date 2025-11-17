import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Music, Calendar as CalendarIcon, Video, Mail } from "lucide-react";
import "../styles/Home.css";

export default function Home() {
  const { t } = useTranslation();

  // On construit l'URL vers l'image dans public/assets
  const heroImage = process.env.PUBLIC_URL + "/assets/release.jpg";

  const features = [
    {
      id: "about",
      icon: Music,
      link: "/about",
    },
    {
      id: "media",
      icon: Video,
      link: "/media",
    },
    {
      id: "calendar",
      icon: CalendarIcon,
      link: "/calendar",
    },
    {
      id: "contact",
      icon: Mail,
      link: "/contact",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero */}
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="home-hero-inner">
          <h1 className="home-title">{t("home.title")}</h1>
          <p className="home-subtitle">{t("home.subtitle")}</p>
          <div className="home-divider" />
          <p className="home-quote">{t("home.quote")}</p>
          <p className="home-quote-author">{t("home.quoteAuthor")}</p>
        </div>
      </section>

      {/* Features */}
      <section className="home-features-section">
        <div className="home-features-inner">
          <h2 className="home-features-title">{t("home.featuresTitle")}</h2>

          <div className="home-features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.id}
                  to={feature.link}
                  className="home-feature-card"
                >
                  <Icon className="home-feature-icon" />
                  <h3 className="home-feature-heading">
                    {t(`home.features.${feature.id}.title`)}
                  </h3>
                  {/* Description désactivée pour l’instant
                  <p className="home-feature-text">
                    {t(`home.features.${feature.id}.description`)}
                  </p> */}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image section */}
      <section className="home-image-section">
        <div className="home-image-wrapper">
          <img
            src="./assets/main.jpg"
            alt="Classical Guitar"
            className="home-image"
          />
        </div>
      </section>
    </div>
  );
}
