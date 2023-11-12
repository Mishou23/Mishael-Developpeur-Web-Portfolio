import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import i18n from './i18n';

export default function App() {
  const { lang } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    // Set the language based on the URL parameter
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/:lang/accueil" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
