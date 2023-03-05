import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__logo-con">
        <div className="header__profile-pic"></div>
        <div className="header__username">Username</div>
      </div>
    <input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10">  <div className="header__logo-search">
    </div>
      <div className="header__logo-right-con">
        <div className="header__notify1"></div>
        <div className="header__notify2"></div>
      </div>
    </header>
  );
}

export default Header;
