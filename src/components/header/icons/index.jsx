import React from 'react';
import './style.css';

export default function Icons() {
  return (
    <div className='Tech-container'>
      <div className='title'>
        <p>Technologies <span>|</span></p>
      </div>
      <div className='all-icons'>
        <div className="icon">
          <i className="fab fa-html5"></i>
        </div>
        <div className="icon">
          <i className="fab fa-js"></i>
        </div>
        <div className="icon">
          <i className="fab fa-css3"></i>
        </div>
        <div className="icon">
          <i className="fab fa-sass"></i>
        </div>
        <div className="icon">
          <i className="fab fa-react"></i>
        </div>
        <div className="icon">
          <i className="fab fa-node"></i>
        </div>
      </div>
    </div>
  );
}
