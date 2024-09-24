import React, { useState } from "react";
import "./AdminPage.css";
import logo from "../assets/svg/logo-s.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Button } from "@mui/material";
import Reservations from "./Reservations";
import CreateListingForm from "./CreateListingForm";
import Listings from "./Listings";
import PropTypes from "prop-types";

const AdminPage = ({selected, onChange}) => {
  
  const [showReservation, setShowReservation] = useState(false);
  const [showListing, setShowListing] = useState(false);
  const [showAddListing, setShowAddListing] = useState(false);
  
  const handleShowReservations = () => {
    setShowReservation(true);
    setShowListing(false);
    setShowAddListing(false);
  };

  const handleShowListings = () => {
    setShowListing(true);
    setShowReservation(false);
    setShowAddListing(false);
  };

  const handleShowAddListing = () => {
    setShowAddListing(true);
    setShowReservation(false);
    setShowListing(false);
  };

   return (
    <>
      <div className="header-admin">
        <img src={logo} alt="logo" className="header-logo" />
        <div className="profile-container">
          <div className="profile-div">
            <MenuRoundedIcon />
            <AccountCircleIcon />
          </div>
        </div>
      </div>
      <div className="button-container">
        <Button variant="outlined" onClick={handleShowReservations}>
          View Reservation
        </Button>
        <Button variant="outlined" onClick={handleShowListings}>
          View Listing
        </Button>
        <Button variant="outlined" onClick={handleShowAddListing}>
          Create Listing
        </Button>
      </div>
      <hr />
      <p className="hotel-list">My Hotel List</p>
      <hr />

      {/* Conditionally render based on the state */}
      {showListing && (<Listings/>)}

      {showReservation && (<Reservations /> )}

      {showAddListing && (<CreateListingForm /> )}
    </>
  );
};

AdminPage.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string).isRequired, // This will throw a warning if not provided
  onChange: PropTypes.func.isRequired,
};

export default AdminPage;
