import React from 'react';
import './style.css';
// Import the SVGs
import HtmlIcon from '../../../assets/svg/html.svg';
import CssIcon from '../../../assets/svg/css.svg';
import JsIcon from '../../../assets/svg/js.svg';
import NodeJsIcon from '../../../assets/svg/nodejs.svg';
import ReactIcon from '../../../assets/svg/reactjs.svg';
import SassIcon from '../../../assets/svg/sass.svg';

export default function Icons() {
  return (
    <div className='Tech-container'>
      <div className='title'>
        <p>Technologies <span>|</span></p>
      </div>
      <div className='all-icons'>
        <div className="icon">
          <img src={HtmlIcon} alt="HTML" />
        </div>
        <div className="icon">
          <img src={JsIcon} alt="JavaScript" />
        </div>
        <div className="icon">
          <img src={CssIcon} alt="CSS" />
        </div>
        <div className="icon">
          <img src={SassIcon} alt="Sass" />
        </div>
        <div className="icon">
          <img src={ReactIcon} alt="React" />
        </div>
        <div className="icon">
          <img src={NodeJsIcon} alt="Node.js" />
        </div>
      </div>
    </div>
  );
}
