import React from "react";
import { useTranslation } from "react-i18next";
import Photo from "../../assets/images/web_developer.webp";
import CV from "../../assets/cv/Mishael_Dev_CV.pdf";
import "./style.css";

export default function AboutMeContainer() {
  const { t } = useTranslation();

  return (
    <>
      <section className="AboutMeContainer">
        <div className="aboutMeContent">
          <div className="image-container">
            <img src={Photo} alt="web developer photo" />
          </div>
          <div className="aboutMeText">
            <p>{t("greeting")}</p>
            <br></br>
            <p>{t("journeyStart")}</p>
            <p>{t("challenges")}</p>
            <p>{t("training2022")}</p>
            <p>{t("training2023")}</p>
            <br></br>
            <p>{t("OfferCV")}</p>
            <div className="downloadBtn">
              <a href={CV} target="_blank" download>
                <button>{t("DownloadCV")}</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
