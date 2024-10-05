import React, { useState, useEffect } from "react";
import '../styles/Listing.css'
import { Navigate, useParams } from "react-router-dom";
import BedroomChildOutlinedIcon from "@mui/icons-material/BedroomChildOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import TitleOutlinedIcon from "@mui/icons-material/TitleOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import axios from "axios";
import Amenities from "./Amenities";
import PhotoUploader from "./PhotoUploader";

const CreateListingForm = () => {
  const { id } = useParams();
  const [listing, setListing] = useState("");
  const [guests, setGuests] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [room, setRoom] = useState("");
  const [bath, setBath] = useState("");
  const [beds, setBeds] = useState("");
  const [addedPhoto, setAddedPhoto] = useState([]);
  const [description, setDescription] = useState("");
  const [ameneties, setAmenities] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/listings/${id}`).then((response) => {
      const { data } = response;
      setListing(data.listing);
      setGuests(data.guests);
      setTitle(data.title);
      setLocation(data.location);
      setRoom(data.room);
      setBath(data.bath);
      setBeds(data.beds);
      setAddedPhoto(data.addedPhoto);
      setDescription(data.description);
      setAmenities(data.ameneties);
    });
  }, [id]);


  if (redirect) {
    <Navigate to={"/admin/listings"} />;
  }



  const saveListing = async (e) => {
    e.preventDefault();
    const data = {
      listing,
      guests,
      title,
      location,
      room,
      bath,
      beds,
      addedPhoto,
      description,
      ameneties,
    };
    if (id) {
      await axios.put(`/api/listings/${id}`, ...data);
      setRedirect(true);
    } else {
      await axios.post("/listings", data);
      setRedirect(true);
    }
  };

  return (
    <div>
      <div className="add-listing">
        <h1>Add Listing</h1>
        <form className="add-listing-form" onSubmit={saveListing}>
          <div className="add-listing-container">
            <div>
              <div className="inputs">
                <input type="text" placeholder="Listing Name" />
                <BadgeOutlinedIcon className="icons" />
              </div>
              <div className="inputs">
                <input type="text" placeholder="Location" />
                <LocationOnOutlinedIcon className="icons" />
              </div>
              <div className="inputs">
                <select>
                  <option value="">Type</option>
                  <option value="beach">Beach House </option>
                  <option value="villa">Villa </option>
                  <option value="home">Entire home</option>
                  <option value="cabin">Cabin </option>
                  <option value="apartment">Apartment</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>
              <div className="inputs">
                <input type="text" placeholder="Room" />
                <BedroomChildOutlinedIcon className="icons" />
              </div>
              <div className="inputs">
                <input type="text" placeholder="Baths" />
                <BathtubOutlinedIcon className="icons" />
              </div>
              <div className="inputs">
                <input type="text" placeholder="Beds" />
                <BedOutlinedIcon className="icons" />
              </div>
            </div>
            <PhotoUploader/>
            <div>
              <div className="inputs">
                <input type="text" placeholder="Guests" />
                <PeopleAltOutlinedIcon className="icons" />
              </div>
              <div className="inputs">
                <input type="text" placeholder="Title" />
                <TitleOutlinedIcon className="icons" />
              </div>
              <div className="upload-description">
                <div className="inputs">
                  <textarea placeholder="Description" cols="30" rows="10" />
                  <DescriptionOutlinedIcon className="icons" />
                </div>
              </div>
              
            </div>
          </div>
          <Amenities />
        </form>
      </div>
    </div>
  );
};



export default CreateListingForm;
