import '../styles/NavBar.css';
import logo from '../assets/logo.png';
import React from 'react';

import art from '../assets/art.png';

export default function NavBar() {
  return (
    <div className="NavBar">
      <img src={art} alt="art" className="wdm-art" />

      <img src={logo} alt="logo" className="head-logo" />
    </div>
  );
}
