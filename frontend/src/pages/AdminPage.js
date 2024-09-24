import React, { useEffect, useState } from 'react';
import "./AdminPage.css";
import logo from "../assets/svg/logo-s.svg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Button } from '@mui/material';

const AdminPage = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/reservations")
      .then(response => response.json())
      .then(json => setReservations(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className='header-admin'>
        <img src={logo} alt="logo" className="header-logo" />
        <div className="profile-container">
          <div className="profile-div">
            <MenuRoundedIcon />
            <AccountCircleIcon />
          </div>
        </div>
      </div>
      <div className='button-container'>
        <Button variant='outlined' onClick={handleShowReservations}>View Reservation</Button>
        <Button variant='outlined' onClick={handleShowListings}>View Listing</Button>
        <Button variant='outlined' onClick={handleShowAddListing}>Create Listing</Button>
      </div>
      <hr />
      <p className='hotel-list'>My Hotel List</p>
      <hr />

      {/* Conditionally render based on the state */}
      {showListing && (
        <div className='img-container'>
          <div className='img-content'>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-872294280468339009/original/9ac867f1-ec81-498b-b356-4b52c402fb75.jpeg?im_w=720" alt="img" />
            <button className='update'>Update</button>
            <button className='delete'>Delete</button>
          </div>
          <div className='img-content-info'>
            <p>3 bedroom</p>
            <p>Sandton Hotel</p>
            <p>3 bedroom . 4 bath 2 . guest</p>
            <p>Wifi parking</p>
            <p>Rating price</p>
          </div>
          <hr />
        </div>
      )}

      {showReservation && (
        <div className='table-content'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <h1>My Reservations</h1>
              <table border={1}>
                <thead>
                  <tr>
                    <th>Booked by</th>
                    <th>Property</th>
                    <th>Checkin</th>
                    <th>Checkout</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map(reservation => (
                    <tr key={reservation.id}>
                      <td>{reservation.name}</td>
                      <td>{reservation.email}</td>
                      <td>{reservation.phone}</td>
                      <td>{reservation.address}</td>
                      <td><button className='delete'>Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      )}

      {showAddListing && (
        <div className='add-listing'>
          <h1>Add Listing</h1>
          <form>
            <div>
              <input type="text" placeholder="Listing Name" />
            </div>
            <div>
              <input type="text" placeholder="Location" />
            </div>
            <div>
              <input type="text" placeholder="Room" />
            </div>
            <div>
              <input type="text" placeholder="Baths" />
            </div>
            <div>
              <input type="text" placeholder="Beds" />
            </div>
            <div>
              <input type="text" placeholder="Guests" />
            </div>
            <div>
              <input type="text" placeholder="Title" />
            </div>
            <div>
              <select>
                <option value="">Type</option>
                <option value="beach">Beach House</option>
                <option value="villa">Villa</option>
                <option value="home">Entire home</option>
                <option value="cabin">Cabin</option>
              </select>
            </div>
            
            <div>
              <teaxtarea placeholder="Description" cols="30" rows="10"/>
            </div>

            <button type="submit">Add Listing</button>
          </form>
        </div>
      )}
    </>
  );
}

export default AdminPage;
