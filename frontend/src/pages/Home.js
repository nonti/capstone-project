import React from 'react'
import './Home.css'
import Banner from '../components/Banner/Banner'
import CardTiles from '../components/Card/CardTiles'
import Expriences from '../components/Experiences/Expriences'
import GiftCard from '../components/GiftCard/GiftCard'
import Host from '../components/Host/Host'
import Inspiration from '../components/Inspiration/Inspiration'
const Home = () => {
  return (
    <div>
      <Banner/>
      <CardTiles/>
      <Expriences/>
      <GiftCard/>
      <Host/>
      <Inspiration/>
    </div>
  )
}

export default Home