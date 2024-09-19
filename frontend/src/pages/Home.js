import React from "react";
import Card from "../components/Card/Card";
import "./Home.css";
import Banner from "../components/Banner/Banner";
import GiftCard from '../assets/cards.png';
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home-section">
        <p className="home-heading">Inspiration for your next trip</p>
      </div>
      <div className="home-section">
        <Card
          src="https://images.trvl-media.com/lodging/5000000/4290000/4280200/4280116/ad593e09.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
          title="Sandton City Hotel"
          distance="53 km away"
        />
        <Card
          src="https://images.trvl-media.com/lodging/35000000/34160000/34157500/34157423/bae5f433.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
          title="Joburg City Hotel"
          distance="168 km away"
        />
        <Card
          src="https://images.trvl-media.com/lodging/72000000/71560000/71557200/71557111/743acf6c.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
          title="Woodmead Hotel"
          distance="30 miles away"
        />
        <Card
          src="https://images.trvl-media.com/lodging/4000000/3970000/3968600/3968501/ca65e071.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
          title="Hyde Park Hotel"
          distance="34 km away"
        />
        <Card
          src="https://images.trvl-media.com/lodging/6000000/5330000/5329300/5329286/565d0b86.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
          title="Port Elizabeth Hotel"
          distance="45 km away"
        />
      </div>    
      
      <div className="home-section">
        <p className="home-heading">Discover Airbnb Experiences</p>
      </div>
      <div className="home-section">
        <div className="img-container-canyon">
          <p>
            Things to do <br />on your trip
          </p>
          <button className="btn">Experiences</button>
        </div>
        <div className="img-container-chef">
          <p>
            Things to do <br /> from home
          </p>
          <button className="btn">Online Experiences</button>
        </div>
      </div>
      <div className="home-section img-gift-card">
      <div className="gift-card-info">
          <p>Shop Airbnb <br />gift cards</p>
          <button className="btn-learn">Learn more</button>
        </div>
        <div className="gift-card-img">
          <img src={GiftCard} alt="Airbnb Gift Cards" />
        </div>        
      </div>
      <div className="home-section">
      <div class="questions">
        <div class="que">Questions <br/> about <br/> hosting?</div>
        <button>Ask a Superhost</button>
    </div>
      </div>
    </div>
  );
};

export default Home;
