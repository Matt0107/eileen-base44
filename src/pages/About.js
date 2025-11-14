import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/About.css";

export default function About() {
  const { t } = useTranslation();

  const educationList = t("about.educationList", { returnObjects: true });
  const awardsList = t("about.awardsList", { returnObjects: true });

  return (
    <div className="about-page">
      <div className="about-inner">
        <h1 className="about-title">{t("about.title")}</h1>
        <p className="about-subtitle">{t("about.subtitle")}</p>

        {/* Portrait */}
        <div className="about-portrait-wrapper">
          <div className="about-portrait-frame">
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=1000&fit=crop"
              alt="Eileen Baum"
              className="about-portrait-image"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="about-bio">
          <p>{t("about.bio1")}</p>
          <p>{t("about.bio2")}</p>
          <p>{t("about.bio3")}</p>
          <p>{t("about.bio4")}</p>
        </div>

        {/* Education / Awards */}
        <div className="about-grid">
          <div className="about-column">
            <h2 className="about-section-title">
              {t("about.educationTitle")}
            </h2>
            <ul className="about-list">
              {educationList.map((item, index) => (
                <li key={index} className="about-list-item">
                  <span className="about-bullet">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-column">
            <h2 className="about-section-title">
              {t("about.awardsTitle")}
            </h2>
            <ul className="about-list">
              {awardsList.map((item, index) => (
                <li key={index} className="about-list-item">
                  <span className="about-bullet">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
