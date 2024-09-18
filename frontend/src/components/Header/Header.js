import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <div className="header">
      <div className="top-header">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-symbol.jpg"
          className="header-logo"
          alt="logo"
        />
        <div className="header-text">
          <p>Places to stay</p>
          <p>Experiences</p>
          <p>Online Experiences</p>
        </div>
        <div className="header-links">
          <p>Becaome a host</p>
          <LanguageIcon className="language-icon" />
          <div className="profile-menu-icons">
            <MenuIcon className="menu-icon" />
            <AccountCircleIcon className="account-icon" />
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-search">
          <div className="search-where">
            <div>Hotels</div>
            <div className="search-input">
              <input type="text" placeholder="Select Hotel" />
            </div>
          </div>
          <div className="border-divider"></div>
          <div className="search-checkin">
            <div>Check In</div>
            <div className="search-button">Add dates</div>
          </div>
          <div className="border-divider"></div>
          <div className="search-checkout">
            <div>Check Out</div>
            <div className="search-button">Add dates</div>
          </div>
          <div className="border-divider"></div>
          <div className="search-who">
            <div>Guests</div>
            <div className="search-button">Add guests</div>
          </div>
          <button className="search">
          <SearchIcon className="search-icon"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
