import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "../../assets/svg/logo_s.svg";
import logo_s from "../../assets/svg/logo-s.svg";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/Login";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useState("Location");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState(1);
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();

  const locations = [
    "All",
    "Pretoria",
    "Sandton",
    "Woodmead",
    "Hyde Park",
    "Port Elizabeth",
  ];

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOnGuestChange = (operation) => {
    setGuestCount((prevCount) => {
      const newCount = operation === "increment" ? prevCount + 1 : prevCount - 1;
      return Math.max(1, Math.min(10, newCount));
    });
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowGuestPopup(false);
    }
  };

  useEffect(() => {
    if (showGuestPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showGuestPopup]);

  const handleSearch = () => {
    if (location !== "Location" && checkInDate && checkOutDate) {
      const params = new URLSearchParams({
        location,
        checkIn: checkInDate.toISOString(),
        checkOut: checkOutDate.toISOString(),
        guests: guestCount,
      }).toString();
      navigate(`/search-standard?${params}`);
    }
  };

  const handleBecomeHostClick = () => {
    setShowLoginModal((prev) => !prev);
  };

  return (
    <>
      <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <img
          src={isScrolled ? logo_s : logo}
          alt="logo"
          className="header-logo"
        />
        {!isScrolled ? (
          <div className="header-text">
            <p>Places to stay</p>
            <p>Experiences</p>
            <p>Online Experiences</p>
          </div>
        ) : (
          <div className="search-bar-container">
            <div className="search-bar">
              <div className="search-bar-text">Anywhere</div>
              <div className="search-bar-text">Add dates</div>
              <div className="search-bar-text2">Add guests</div>
              <div className="search-icon-div">
                <SearchRoundedIcon className="search-icon" />
              </div>
            </div>
          </div>
        )}
        <div className="profile-container">
          <div className={`become-a-host ${isScrolled ? 'scrolled' : ''}`} onClick={handleBecomeHostClick}>
            Become a host
          </div>
          <div className={`become-a-host ${isScrolled ? 'scrolled' : ''}`}>
            <LanguageIcon className={`lang-icon ${isScrolled ? 'scrolled' : ''}`} sx={{ fontSize: "1.3rem" }} />
          </div>
          <div className="profile-div">
            <MenuRoundedIcon />
            <AccountCircleIcon />
          </div>
        </div>
      </div>

      {/* SearchBox remains hidden on scroll */}
      {!isScrolled && (
        <div className="header-bottom">
          <div className="header-search">
            <div className="search-where">
              <div>Hotels</div>
              <div className="search-input">
                <select onChange={(e) => setLocation(e.target.value)} value={location}>
                  <option disabled>Location</option>
                  {locations.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="border-divider"></div>
            <div className="search-checkin">
              <div>Check In</div>
              <div className="search-button">
                <DatePicker
                  selected={checkInDate}
                  onChange={setCheckInDate}
                  placeholderText="Add dates"
                  className="date-picker"
                />
              </div>
            </div>
            <div className="border-divider"></div>
            <div className="search-checkout">
              <div>Check Out</div>
              <div className="search-button">
                <DatePicker
                  selected={checkOutDate}
                  onChange={setCheckOutDate}
                  placeholderText="Add dates"
                  className="date-picker"
                />
              </div>
            </div>
            <div className="border-divider"></div>
            <div className="search-who">
              <p>Guests</p>
              <button
                className="search-button"
                onClick={() => setShowGuestPopup(true)}
              >
                {guestCount > 0 ? `${guestCount} Guest` : `${guestCount} Guest`}
              </button>
            </div>
            {showGuestPopup && (
              <div className="guest-popup" ref={popupRef}>
                <div className="guest-selector">
                  <button
                    className="guest-button"
                    onClick={() => handleOnGuestChange("decrement")}
                  >
                    <RemoveIcon />
                  </button>
                  <input
                    type="number"
                    value={guestCount}
                    readOnly
                    className="guest-input"
                  />
                  <button
                    className="guest-button"
                    onClick={() => handleOnGuestChange("increment")}
                  >
                    <AddIcon />
                  </button>
                </div>
              </div>
            )}
            <button className="search" onClick={handleSearch}>
              <SearchIcon className="search-icon" />
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="login-modal">
          <div className="modal-content">
            <span className="close" onClick={handleBecomeHostClick}>&times;</span>
            <Login />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
