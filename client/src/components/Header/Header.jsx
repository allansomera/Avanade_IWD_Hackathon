import React from "react";

import "./Header.scss";

import equal from "../../assets/icons/Logo.png";
import profileUser from "../../assets/icons/Profile Icon.png";
import notification from "../../assets/icons/Notification Icon.png";

function Header() {
	return (
		<div className="header">
			<div className="header__logo">
				<img src={equal} alt="company-logo" className="header__logo-img" />
			</div>
			<div className="header__search-con">
				<input
					type="text"
					className="header__search-input"
					name="name"
					placeholder="Search for a company"
				/>
			</div>
			<div className="header__right-con">
				<img src={profileUser} alt="company-logo" className="header__notify1" />
				<img src={notification} alt="company-logo" className="header__notify2" />
			</div>
		</div>
	);
}

export default Header;
