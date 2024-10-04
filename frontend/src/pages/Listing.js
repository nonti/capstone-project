import React from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "../styles/Listing.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import CountertopsOutlinedIcon from "@mui/icons-material/CountertopsOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import CameraIndoorOutlinedIcon from "@mui/icons-material/CameraIndoorOutlined";
import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";
import { Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
const Listing = () => {
  // const [startDate, endDate] = useState()
  const state = {
    startDate: null,
    endDate: null,
    endDateFormatted: null,
    startDateFormatted: null,
  };
  const handleDateChange = (startDate, endDate) => {
    this.setState(() => ({
      endDate,
      startDate,
    }));
    if (startDate != null) {
      this.setState(() => ({
        startDateFormatted: startDate.format("D-MM-Y"),
      }));
    }
    if (endDate != null) {
      this.setState(() => ({
        endDateFormatted: endDate.format("D-MM-Y"),
      }));
    }
  }
  return (
    <>
      <div className="listng-container">
        <h1 className="listing-title">title</h1>
        <div className="reviews">
          <div className="rating">
            <StarBorderIcon /> <span>5.0</span>*<p>7 reviews * </p>
            <p>Boudeex, France</p>
          </div>
          <div className="share-save">
            <IosShareIcon /> <span>Share</span>
            <FavoriteBorderIcon /> <span>Save</span>
          </div>
        </div>
        <div class="image-grid">
          <div class="item item1">
            <img
              className="image"
              src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_640.jpg"
              alt=""
            />
          </div>
          <div class="item">
            <img
              className="image"
              src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_640.jpg"
              alt=""
            />
          </div>
          <div class="item">
            <img
              className="image"
              src="https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_1280.jpg"
              alt=""
            />
          </div>
          <div class="item">
            <img
              className="image"
              src="https://i0.wp.com/picjumbo.com/wp-content/uploads/tropical-beach-free-image.jpeg?w=600&quality=80"
              alt=""
            />
          </div>
          <div class="item">
            <img
              className="image"
              src="https://i.pinimg.com/736x/8b/9c/d1/8b9cd167c0366c0e24a9ef9b82b38784.jpg"
              alt=""
            />
          </div>
        </div>

        <section>
          <div className="listing place">South africa</div>
          <div className="room-info">
            <p>2 guests</p> .<p>1 bedroom</p> .<p>2 bathroom</p> .
          </div>
          <div className="user-info">
            <img src="" alt="user profile" />
          </div>
        </section>
        <hr />
        <section className="listing-info2">
          <div className="listing-info2-title">
            <HomeOutlinedIcon />
            <div>
              <span>Entire Home</span>
              <span className="listing-info2-text">
                You'll have the apartment to yourself
              </span>
            </div>
          </div>
          <div className="listing-info2-title">
            <AutoAwesomeOutlinedIcon />
            <div>
              <span>Enhanced Clean</span>
              <span className="listing-info2-text">
                This Host commited to Airbnb'5 step enhance cleaning process.{" "}
                <strong>Show more</strong>
              </span>
            </div>
          </div>
          <div className="listing-info2-title">
            <DoorFrontOutlinedIcon />
            <div>
              <span>Self check-in</span>
              <span className="listing-info2-text">
                Check yourself in with the key
              </span>
            </div>
          </div>
          <div className="listing-info2-title">
            <EventBusyOutlinedIcon />
            <span className="free">
              <strong>Free cancellation before 14 Feb</strong>
            </span>
          </div>
        </section>
        <hr />

        <section className="description">
          BlackBrick Sandton’s Studio is the ideal option for business travelers
          <br /> and anyone looking for a weekend getaway or a place they can
          call their home away from home.
          <div>
            <a href="#fds">
              Show more <KeyboardArrowRightOutlinedIcon className="icon" />
            </a>
          </div>
        </section>
        <hr />
        <section className="sleep">
          <h3>Where you'll sleep</h3>

          <img
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-1209497090243655715/original/d0250c51-6049-4663-a93d-c6fd628f2bc8.jpeg?im_w=1200"
            alt=""
          />
          <p>
            <strong>Bedroon</strong>
          </p>
          <p>1 queen bed</p>
        </section>
        <section >
          <div className="offers">
          <div className="amenities">
            
              <span>
                <YardOutlinedIcon className='icons-amenities'/> Garden view
              </span>
              <span>
                <WifiOutlinedIcon className='icons-amenities'/> Wifi
              </span>
               <span><AdjustOutlinedIcon className='icons-amenities'/>Free washer -in building</span>
              <span><AirOutlinedIcon className='icons-amenities'/>Central air conditioning</span>
              <span>
                <KitchenOutlinedIcon className='icons-amenities'/> Refridgirator
              </span>
          </div>
          <div className="amenities">
              <span>
                <CountertopsOutlinedIcon className='icons-amenities'/>
                Kitchen
              </span>
              <span>
                <PetsOutlinedIcon className='icons-amenities'/> Pets allowed
              </span>
              <span>
                <LocalLaundryServiceOutlinedIcon className='icons-amenities'/> Dryer
              </span>
              <span>
                <CameraIndoorOutlinedIcon className='icons-amenities'/> Security
              </span>
              <span>
                <DirectionsBikeOutlinedIcon className='icons-amenities'/> Bicycle
              </span>
          </div>
          </div>
          <Button className='show' variant="outlined">Show all 37 amenities</Button>
        </section>
        <hr />
        <section>
          <h1>7 nights in New York</h1>
          date range needs to be implemented
          <DateRangePicker
          startDate={state.startDate}
          startDateId="start_date_id"
          endDate={state.endDate}
          endDateId="end_date_id"
          onDatesChange={({ startDate, endDate }) =>
            handleDateChange(startDate, endDate)
          }
          focusedInput={state.focusedInput}
          onFocusChange={(focusedInput) => this.setState({ focusedInput })}
        />

        </section>
      </div>
    </>
  );
};

export default Listing;
