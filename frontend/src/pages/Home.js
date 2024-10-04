import React from 'react';
import '../styles/Home.css';
import Banner from '../components/Banner';
import CardTiles from '../components/CardTiles';
import Expriences from '../components/Expriences';
import GiftCard from '../components/GiftCard';
import Host from '../components/Host';
import Inspiration from '../components/Inspiration';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Banner/>
      <CardTiles/>
      <Expriences/>
      <GiftCard/>
      <Host/>
      <Inspiration/>
      <Footer/>
    </div>
  )
}

export default Home