import React from "react";
import "../styles/Calendar.css";
import { useTranslation } from "react-i18next";
import { MapPin, Calendar as CalendarIcon } from "lucide-react";

export default function CalendarPage() {
  const { t } = useTranslation();
  const events = t("calendar.events", { returnObjects: true });

  return (
    <div className="calendar-page">
      <div className="calendar-inner">
        <h1 className="calendar-title">{t("calendar.title")}</h1>
        {/* <p className="calendar-subtitle">{t("calendar.subtitle")}</p> */}

        <div className="calendar-events">
          {events.map((event, index) => (
            <div key={index} className="calendar-event">
              <div className="calendar-event-header">
                <h2 className="calendar-event-title">{event.title}</h2>
                {event.venue && (
                  <p className="calendar-event-venue">{event.venue}</p>
                )}
              </div>

              <div className="calendar-meta">
                <div className="calendar-meta-item">
                  <CalendarIcon className="calendar-meta-icon" />
                  <span>{event.date}</span>
                </div>
                <div className="calendar-meta-item">
                  <MapPin className="calendar-meta-icon" />
                  <span>{event.location}</span>
                </div>
              </div>

              <p className="calendar-description">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
