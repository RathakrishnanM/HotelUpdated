
import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to='/' onClick={closeMobileMenu}>
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={closeMobileMenu}>
               <b> About us</b>
              </Link>
            </li>
            <li>
              <Link to='/gallery' onClick={closeMobileMenu}>
                <b>Amenities</b>
              </Link>
            </li>
            <li>
              <Link to='/destinations' onClick={closeMobileMenu}>
                <b>Destinations</b>
              </Link>
            </li>
            <li>
              <Link to='/bookings' onClick={closeMobileMenu}>
               <b>Bookings</b>
              </Link>
            </li>
            <li>
              <Link to='/testimonial' onClick={closeMobileMenu}>
                <b>Testimonial</b>
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={closeMobileMenu}>
                <b>Contact Us</b>
              </Link>
            </li>
          </ul>

          <div className='login-area flex'>
            <li>
              <Link to='/sign-in'>
                <i class='far fa-chevron-right'></i><b>Sign in</b>
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <i class='far fa-chevron-right'></i><b>Register</b>
              </Link>
            </li>
            {/* <li>
              <Link to='/contact'>
                <button className='primary-btn'>Request a Quote</button>
              </Link>
            </li> */}
          </div>
        </div>
      </nav>

      <header>
        <div className='container flex_space'>
          <div className='logo'>
            <img src='images/hotel-2.png' alt='' />
          </div>

          <div className='contact flex_space '>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='fal fa-clock'></i>
              </div>
              <div className='text'>
                <h4>Working Hours</h4>
                <Link to='/contact'>Sunday-Saturday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='fas fa-phone-volume'></i>
              </div>
     <div className='text'>
                <h4>Call Us</h4>
                <Link to='/contact'>+01 126 097 654</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='far fa-envelope'></i>
              </div>
              <div className='text'>
                <h4>Mail Us</h4>
                <Link to='/contact'>wowstaysus@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
