import React from "react";
import "../styles/Media.css";
import { useTranslation } from "react-i18next";
import YouTubeConsentFrame from "../components/YouTubeConsentFrame";

export default function Media() {
  const { t } = useTranslation();

  const videos = [
    {
      url: "https://www.youtube-nocookie.com/embed/tHc_bCTKB4w?si=zzgKoh05Uqn44Rag",
      title: t("media.video1Title"),
    },
    {
      url: "https://www.youtube-nocookie.com/embed/55kU1yW8sVw?si=Aw_V9r-gEACtoSZO",
      title: t("media.video2Title"),
    },
    {
      url: "https://www.youtube-nocookie.com/embed/Evd_xku8ZGc?si=scUHTVKb9zvPUR2u",
      title: t("media.video3Title"),
    },
    {
      url: "https://www.youtube-nocookie.com/embed/h2jlBaOHae0?si=ob_0mnF9XK7NXztn",
      title: t("media.video4Title"),
    },
    {
      url: "https://www.youtube-nocookie.com/embed/3oThh122l_U?si=IUfw6JLWcjeFoKPE",
      title: t("media.video5Title"),
    },
  ];

  return (
    <div className="media-page">
      <div className="media-inner">
        <h1 className="media-title">{t("media.title")}</h1>
        <p className="media-subtitle">{t("media.subtitle")}</p>

        <div className="media-grid">
          {videos.map((video, index) => (
            <div key={index} className="media-card">
              <div className="media-video-wrapper">
                <YouTubeConsentFrame url={video.url} title={video.title} />
              </div>
              <h3 className="media-video-title">{video.title}</h3>
              {/* Si un jour tu remets les descriptions : */}
              {/* <p className="media-video-desc">{video.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
