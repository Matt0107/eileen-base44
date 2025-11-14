import React, { useState } from "react";
import "../styles/Contact.css";
import { useTranslation } from "react-i18next";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    try {
      const subject = `Website Contact: ${formData.subject}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;

      const mailtoLink = `mailto:info@eileenbaum.de?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-inner">
        <h1 className="contact-title">{t("contact.title")}</h1>
        <p className="contact-subtitle">{t("contact.subtitle")}</p>

        <div className="contact-grid">
          {/* Formulaire */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t("contact.namePlaceholder")}
                className="contact-input"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t("contact.emailPlaceholder")}
                className="contact-input"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder={t("contact.subjectPlaceholder")}
                className="contact-input"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder={t("contact.messagePlaceholder")}
                className="contact-textarea"
              ></textarea>

              <button type="submit" className="contact-button">
                {t("contact.submitButton")}
              </button>

              {submitStatus === "success" && (
                <p className="contact-message contact-message-success">
                  {t("contact.successMessage")}
                </p>
              )}

              {submitStatus === "error" && (
                <p className="contact-message contact-message-error">
                  {t("contact.errorMessage")}
                </p>
              )}
            </form>
          </div>

          {/* Infos de contact */}
          <div className="contact-info">
            <h2 className="contact-info-title">{t("contact.infoTitle")}</h2>

            <div className="contact-info-item">
              <div className="contact-info-heading">
                <Mail className="contact-info-icon" />
                <h3 className="contact-info-label">
                  {t("contact.emailLabel")}
                </h3>
              </div>
              <p className="contact-info-text">{t("contact.emailValue")}</p>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-heading">
                <MapPin className="contact-info-icon" />
                <h3 className="contact-info-label">
                  {t("contact.locationLabel")}
                </h3>
              </div>
              <p className="contact-info-text">{t("contact.locationValue")}</p>
            </div>

            <div className="contact-image-wrapper">
              <div className="contact-image-frame">
                <img
                  src="./assets/face2.jpg"
                  alt="Guitar detail"
                  className="contact-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
