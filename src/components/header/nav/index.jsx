import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Update this line
import i18n from "../../../i18n";
import Logo from "../../../assets/images/logo_img.png";
import "./index.css";

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate(); // Update this line
  const [isFixed, setIsFixed] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  
    // Extract the current language and page name from the current URL
    const currentLanguage = location.pathname.split("/")[1];
    const currentPage = location.pathname.split("/")[2];
  
    // Check if the current project has an ID
    const currentProjectId = location.pathname.split("/")[3];
  
    // Build the new URL with the updated language and include the project ID if available
    const newUrl = currentProjectId
      ? `/${lng}/${currentPage}/${currentProjectId}`
      : `/${lng}/${currentPage}`;
  
    // Update the URL with the selected language and route
    window.history.pushState({}, "", newUrl);
    // Use react-router's navigate to update the URL and trigger a re-render
    navigate(newUrl);
    // Set the lang attribute dynamically
    document.documentElement.lang = lng;
  };

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight;
      setIsFixed(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${isFixed ? "fixed" : ""}`}>
      <div className="container-nav">
        <div className="imageContainer">
          <img src={Logo} alt="Logo" />
        </div>
        <ul>
          <li>
            <div>
              <Link
                to={`/${i18n.language}/${
                  i18n.language === "fr" ? "accueil" : "home"
                }`}
              >
                {t("Accueil")}
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link
                to={`/${i18n.language}/${
                  i18n.language === "fr" ? "a-propos" : "about-me"
                }`}
              >
                {t("A propos")}
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to={`/${i18n.language}/${
                  i18n.language === "fr" ? "projets" : "projects"
                }`}>{t("Projets")}</Link>
            </div>
          </li>
          <li>
            <div>
              <Link to={`/${i18n.language}/${
                  i18n.language === "fr" ? "contact" : "contact"
                }`}>{t("Contact")}</Link>
            </div>
          </li>
          <li className="translateEng" onClick={() => changeLanguage("en")}>
            <span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAt1BMVEWSmb66z+18msdig8La3u+tYX9IaLc7W7BagbmcUW+kqMr/q6n+//+hsNv/lIr/jIGMnNLJyOP9/fyQttT/wb3/////aWn+YWF5kNT0oqz0i4ueqtIZNJjhvt/8gn//WVr/6+rN1+o9RKZwgcMPJpX/VFT9UEn+RUX8Ozv2Ly+FGzdYZrfU1e/8LS/lQkG/mbVUX60AE231hHtcdMb0mp3qYFTFwNu3w9prcqSURGNDaaIUMX5FNW5wYt7AAAAAjklEQVR4AR3HNUJEMQCGwf+L8RR36ajR+1+CEuvRdd8kK9MNAiRQNgJmVDAt1yM6kSzYVJUsPNssAk5N7ZFKjVNFAY4co6TAOI+kyQm+LFUEBEKKzuWUNB7rSH/rSnvOulOGk+QlXTBqMIrfYX4tSe2nP3iRa/KNK7uTmWJ5a9+erZ3d+18od4ytiZdvZyuKWy8o3UpTVAAAAABJRU5ErkJggg=="
                alt="English"
              />
            </span>
          </li>
          <li className="translateFr" onClick={() => changeLanguage("fr")}>
            <span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAbFBMVEVzldTg4ODS0tLxDwDtAwDjAADD0uz39/fy8vL3k4nzgna4yOixwuXu7u7s6+zn5+fyd2rvcGPtZljYAABrjNCpvOHrWkxegsqfs93NAADpUUFRd8THAABBa7wnVbERRKa8vLyxsLCoqKigoKClCvcsAAAAXklEQVR4AS3JxUEAQQAEwZo13Mk/R9w5/7UERJCIGIgj5qfRJZEpPyNfCgJTjMR1eRRnJiExFJz5Mf1PokWr/UztIjRGQ3V486u0HO55m634U6dMcf0RNPfkVCTvKjO16xHA8miowAAAAABJRU5ErkJggg=="
                alt="Français"
              />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
