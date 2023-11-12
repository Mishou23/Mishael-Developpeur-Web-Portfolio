import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import i18n from './i18n'; 

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const { lang } = useParams();

  useEffect(() => {
    // Set the language based on the URL parameter
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/:lang/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
