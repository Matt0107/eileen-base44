import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Music, Calendar as CalendarIcon, Video, Mail } from "lucide-react";
import "../styles/Home.css";

export default function Home() {
  const { t } = useTranslation();

  const heroImage = process.env.PUBLIC_URL + "/assets/release.jpg";

  const features = [
    {
      id: "about",
      icon: Music,
      link: "/about",
      image:
        "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "media",
      icon: Video,
      link: "/media",
      image:
        "https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "calendar",
      icon: CalendarIcon,
      link: "/calendar",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "contact",
      icon: Mail,
      link: "/contact",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
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
          <h2 className="home-section-title">{t("home.featuresTitle")}</h2>

          <div className="home-features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.id}
                  to={feature.link}
                  className="home-feature-card"
                >
                  {/* Background image */}
                  <div
                    className="home-feature-bg"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />

                  {/* Glass overlay */}
                  <div className="home-feature-glass">
                    <Icon className="home-feature-icon" />
                    <h3 className="home-feature-heading">
                      {t(`home.features.${feature.id}.title`)}
                    </h3>
                    {/* Tu pourras réactiver la description ici si tu veux */}
                    {/* <p className="home-feature-text">
                      {t(`home.features.${feature.id}.description`)}
                    </p> */}
                  </div>
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
