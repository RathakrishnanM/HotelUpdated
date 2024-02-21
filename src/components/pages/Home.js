import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Hero from '../HomeSection/Hero'
import HomeAbout from "../HomeSection/HomeAbout"
// import MostPopular from "../HomeSection/popular/MostPopular"
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import Works from '../HomeSection/Works/Works'
import Footer from '../../common/Footer/Footer'
import Login from '../Login/Login';
const Home = () => {
 
  return (
    <div>
        <Hero/>
        <HomeAbout/>
        <DestinationHome/>
        <Works/>
      
        
        
        
        {/* <MostPopular/> */}
        <Footer/>
    </div>

  )
}

export default Home