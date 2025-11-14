import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Music, Calendar as CalendarIcon, Video, Mail } from "lucide-react";
import "../styles/Home.css";

export default function Home() {
  const { i18n } = useTranslation();
  const language = i18n.language === "de" ? "de" : "en";

  const content = {
    de: {
      title: "Eileen Baum",
      subtitle: "Klassische Gitarristin",
      description:
        "Erleben Sie die zeitlose Schönheit der klassischen Gitarre durch virtuose Interpretationen und leidenschaftliche Darbietungen.",
      featuresTitle: "Entdecken",
      features: [
        {
          icon: Music,
          title: "Über Mich",
          description: "Erfahren Sie mehr über meine musikalische Reise",
          link: "/about",
        },
        {
          icon: Video,
          title: "Medien",
          description: "Sehen Sie meine Aufführungen und Aufnahmen",
          link: "/media",
        },
        {
          icon: CalendarIcon,
          title: "Kalender",
          description: "Vergangene Veranstaltungen und Auftritte",
          link: "/calendar",
        },
        {
          icon: Mail,
          title: "Kontakt",
          description: "Nehmen Sie Kontakt mit mir auf",
          link: "/contact",
        },
      ],
    },
    en: {
      title: "Eileen Baum",
      subtitle: "Classical Guitarist",
      description:
        "Experience the timeless beauty of classical guitar through virtuoso interpretations and passionate performances.",
      featuresTitle: "Discover",
      features: [
        {
          icon: Music,
          title: "About",
          description: "Learn more about my musical journey",
          link: "/about",
        },
        {
          icon: Video,
          title: "Media",
          description: "Watch my performances and recordings",
          link: "/media",
        },
        {
          icon: CalendarIcon,
          title: "Calendar",
          description: "Previous events and performances",
          link: "/calendar",
        },
        {
          icon: Mail,
          title: "Contact",
          description: "Get in touch with me",
          link: "/contact",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <h1 className="home-title">{t.title}</h1>
          <p className="home-subtitle">{t.subtitle}</p>
          <div className="home-divider" />
          <p className="home-description">{t.description}</p>
        </div>
      </section>

      {/* Features */}
      <section className="home-features-section">
        <div className="home-features-inner">
          <h2 className="home-features-title">{t.featuresTitle}</h2>

          <div className="home-features-grid">
            {t.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} to={feature.link} className="home-feature-card">
                  <Icon className="home-feature-icon" />
                  <h3 className="home-feature-heading">{feature.title}</h3>
                  <p className="home-feature-text">{feature.description}</p>
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
            src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&h=675&fit=crop"
            alt="Classical Guitar"
            className="home-image"
          />
        </div>
      </section>
    </div>
  );
}
