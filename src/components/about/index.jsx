// AboutMe.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Coding from "../../assets/images/web_developer.jpg";
import "./index.css";

export default function AboutMe() {
  const { t, i18n } = useTranslation();

  return (
    <section className="aboutContainer" id="a-propos">
      <div className="containAll">
        <article className="aboutContent">
          <div className="about-title">
            <h2>{t("AboutTitle")}</h2>
          </div>
          <div className="about-text">
            <p>
              {t("AboutText")}
              {t("c'est")}
              <Link to={`/${i18n.language}/Aboutme`}>{t("ClickHere")}</Link> !
            </p>
          </div>
        </article>
        <div className="aboutPhotos">
          <div className="imgContainer">
            <img src={Coding} alt="web-developer-coding" />
          </div>
        </div>
      </div>
    </section>
  );
}
