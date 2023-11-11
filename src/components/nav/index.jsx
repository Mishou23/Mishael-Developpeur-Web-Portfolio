import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import Logo from '../../assets/images/logo_img.png';
import './index.css';

export default function Navbar() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    
  };

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="container-nav">
        <div className="imageContainer">
          <img src={Logo} alt="Logo" />
        </div>
        <ul>
          <li>
            <div>
              <a href="#accueil" onClick={() => handleScroll('accueil')}>
                {t('Accueil')}
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="#a-propos" onClick={() => handleScroll('a-propos')}>
                {t('A propos')}
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="#portfolio" onClick={() => handleScroll('portfolio')}>
                {t('Portfolio')}
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="#contact" onClick={() => handleScroll('contact')}>
                {t('Contact')}
              </a>
            </div>
          </li>
          <li className="translateEng" onClick={() => changeLanguage('en')}>
            <span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAt1BMVEWSmb66z+18msdig8La3u+tYX9IaLc7W7BagbmcUW+kqMr/q6n+//+hsNv/lIr/jIGMnNLJyOP9/fyQttT/wb3/////aWn+YWF5kNT0oqz0i4ueqtIZNJjhvt/8gn//WVr/6+rN1+o9RKZwgcMPJpX/VFT9UEn+RUX8Ozv2Ly+FGzdYZrfU1e/8LS/lQkG/mbVUX60AE231hHtcdMb0mp3qYFTFwNu3w9prcqSURGNDaaIUMX5FNW5wYt7AAAAAjklEQVR4AR3HNUJEMQCGwf+L8RR36ajR+1+CEuvRdd8kK9MNAiRQNgJmVDAt1yM6kSzYVJUsPNssAk5N7ZFKjVNFAY4co6TAOI+kyQm+LFUEBEKKzuWUNB7rSH/rSnvOulOGk+QlXTBqMIrfYX4tSe2nP3iRa/KNK7uTmWJ5a9+erZ3d+18od4ytiZdvZyuKWy8o3UpTVAAAAABJRU5ErkJggg=="
                alt="English"
              />
            </span>
          </li>
          <li className="translateFr" onClick={() => changeLanguage('fr')}>
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
