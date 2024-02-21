import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import BookingsData from "../BookingsData"
import EmptyFile from "../../../common/Empty/EmptyFile"
import HeadTitle from "../../../common/HeadTitle/HeadTitle"
import { useParams } from "react-router-dom"
import Footer from "../../../common/Footer/Footer"

const BookingsSingle = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = BookingsData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])
  return (
    <>
      

      {item ? (
        <section className='single-page top'>
          <div className='container'>
            <Link to='/bookings' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            {/* --------- main-content--------- */}

            <article className='content flex_space'>
            
              <div className='main-content'>
                <img src={item.cover} alt='' />

                <div className='category flex_space'>
                  <span>{item.date}</span>
                  {/* <label>{item.catgeory}</label> */}
                </div>

                <h1> {item.title} </h1>
                <p>{item.desc}</p>
                <p>{item.desc}</p>

               

                <div className='para flex_space'>
                  <p>{item.para}</p>
                  <p>{item.para}</p>
                </div>
              </div>
              {/* --------- main-content--------- */}

              {/* --------- side-content--------- */}
              <div className='side-content'>
                <div className='category-list'>
                  <h1>Categories</h1>
                  <hr />
                  <ul>
                    {BookingsData.map((item) => {
                      return (
                        <li>
                          <i className='far fa-play-circle'></i>
                          {item.catgeory}
                        </li>
                      )
                    })}
                  </ul>

                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3>Visit our location</h3>
            <p>
123 Main Street, New York,<br/> CA 98765,<br/> USA.</p>
            <br />

            <h3>Reach us</h3>
            <span>wowstaysus@gmail.com</span>
            <br />
            <span>+01 123 456 789</span>
            <br />

            <div className='icon'>
              <h3>Follow Us</h3>

              <div className='flex_space'>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-pinterest'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div>
              </div>

              {/* --------- side-content--------- */}
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
      <Footer/>
    </>
  )
}

export default BookingsSingle