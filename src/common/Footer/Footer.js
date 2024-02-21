import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p classname="text">Nurtured from the seed of a single idea to empower the traveller with easy and instant travel booking providing comprehensive choice.<b>Wow Stays</b> is a pioneer in India's online travel space.</p>
            <br />
            <p>Experience the home experience outside the rage of the comfort zone znd unleash the memories with wow stays.</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinations</Link>
              </li>
              <li>
                <Link to='/blog'>bookings</Link>
              </li>
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
            </ul>
          </div> */}

          <div className='box'>
          <h3>Visit our location</h3>
            <p>
123 Main Street, New York,<br/> CA 98765,<br/> USA.</p>
            <br />

            <h3>Reach us</h3>
            <span>wowstaysus@gmail.com</span>
            <br />
            <span>+212 555-1234</span>
            <br />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer