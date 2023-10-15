import React from 'react';
import Header from '../../containers/Header';
import AboutMe from '../../components/about'
import './index.css'
export default function Home() {
  return (
    <div>
      <Header />
      <main>
      <AboutMe />
      </main>
    </div>
  );
}
