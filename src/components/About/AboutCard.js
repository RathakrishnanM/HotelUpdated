import React from 'react'
import "./About.css"
const AboutCard = () => {
  return (
    <>
        <div className='aboutCard mtop flex_space'>
            <div className='row row1'>
                <h4>About us</h4>
                <h1 className="ex1">
                    your<span>Adorable Stays</span>  here
                </h1>
                <p>Nurtured from the seed of a single idea to empower the traveller with easy and instant travel booking providing comprehensive choice.<b>Wow Stays</b> is a pioneer in India's online travel space.</p>
                <p>Over the years we have partnered with many leading brands from the aviation and hospitality industries,creating frutiful partner relations for business expansion and oppurtunities.We also entered <b>Home Stays</b> and villas and continued to procure the market</p>
                <p> Delve into the experiences of past guests through our reviews section and connect with us on social media for real-time updates. Secure your reservation effortlessly through our user-friendly booking interface, supported by transparent cancellation policies. </p>
           {/* <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
           </button> */}
           
        </div>
        <div className="row image">
          <img src="/images/about-img-1.jpg" alt=""/>
          <div className="control-btn">
            {/* <button className='prev'>
            <i className="fas fa-play"></i>
            </button> */}
           
          </div>
        </div>
        </div>
    </>
  )
}

export default AboutCard