import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home/index';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const { lang } = useParams();

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path={`/:lang/accueil`} element={<Home />} />
            <Route path={`/:lang/home`} element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
