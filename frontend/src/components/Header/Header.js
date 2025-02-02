import React, { useState, useEffect, useRef } from "react";
import {useLocation} from "react-router-dom";
import "./Header.css";
import logo from "../../assets/svg/logo_s.svg";
import logo_s from "../../assets/svg/airbnb.svg";
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
import Modal from "react-modal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useState("Location");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState(1);
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const  locationPath = useLocation().pathname;

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
  
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleBecomeHostClick = () => {
    setIsLoginModalOpen(true);
  };

  const isResultPage = locationPath.includes("/search-standard");

  return (
    <>
      <div className={`header ${isScrolled ? 'scrolled' : ''}`} style={{ backgroundColor: isResultPage ? 'white' : '' }}>
        <img
          src={isResultPage ? logo_s :(isScrolled ? logo_s : logo)}
          alt="logo"
          className="header-logo"
        />
        {!isResultPage && !isScrolled ? (
          <div className="header-text">
            <p>Places to stay</p>
            <p>Experiences</p>
            <p>Online Experiences</p>
          </div>
        ) : (
          <div className="search-bar-container">
            <div className="search-bar">
              <div className="search-bar-text">{isResultPage ? (location === 'All' ? 'All locations': location): 'Anywhere'}</div>
              <div className="search-bar-text">{isResultPage ? (checkInDate && checkOutDate ? `${checkInDate.toLocaleDateString()} - ${checkOutDate.toLocaleDateString()}`: 'Add dates') : 'Add dates'}</div>
              <div className="search-bar-text2"> {guestCount} Guest{guestCount > 1 ? 's' : ''}</div>
              <div className="search-icon-div">
                <SearchRoundedIcon className="search-icon" />
              </div>
            </div>
          </div>
        )}
        <div className="profile-container">
          <div className={`become-a-host ${isScrolled ? 'scrolled' : ''} ${isResultPage ? 'result-page' : ''}`} onClick={handleBecomeHostClick}>
            Become a host
          </div>
          <div className={`language-icon ${isResultPage ? 'result-page' : ''}`}>
            <LanguageIcon className={`lang-icon ${isScrolled ? 'scrolled' : ''} ${isResultPage ? 'black' : ''}`} sx={{ fontSize: "1.3rem" }} />
          </div>
          <div className="profile-div">
            <MenuRoundedIcon />
            <AccountCircleIcon />
          </div>
        </div>
      </div>

      {/* SearchBox remains hidden on scroll */}
      {!isResultPage && !isScrolled && (
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
            <div className="search" onClick={handleSearch}>
              <SearchIcon className="search-icon" />
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        contentLabel="Login Modal"
        className="login-modal"
        overlayClassName="login-modal-overlay"
      >
        <button className="close-modal" onClick={closeLoginModal}>
          X
        </button>
        <Login /> 
      </Modal>
      )}
    </>
  );
};

export default Header;
