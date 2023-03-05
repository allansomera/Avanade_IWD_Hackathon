import React from 'react';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__logo-con">
        <div className="header__profile-pic"></div>
        <div className="header__username">Username</div>
      </div>
      <div className="header__search-con">
        <input type="text" className="header__search-input" name="name" />
      </div>
      <div className="header__right-con">
        <div className="header__notify1"></div>
        <div className="header__notify2"></div>
      </div>
    </div>
  );
}

export default Header;
