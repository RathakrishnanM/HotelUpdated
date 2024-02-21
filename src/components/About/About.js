// import React from 'react'
// import AboutCard from './AboutCard'
// import HeadTitle from '../../common/HeadTitle/HeadTitle'


// const About = () => {
//   return (
//     <>
     
//         <section className='about top'>
//             <div className='container'>
//                 <AboutCard/>
//             </div>
//         </section>
//         <section className='features top'>
//         <div className='container aboutCard flex_space'>
//           <div className='row row1'>
//             <h1>
//               Our <span>Features</span>
//             </h1>
//             <p><b>Wow Stays </b>offer a range of features to streamline and enhance the user experience. Users can search for accommodations based on various criteria such as location, price range, and amenities, ensuring personalized choices. Detailed hotel profiles provide comprehensive information about the property, including photos, reviews, and ratings, enabling informed decision-making.</p>
//             <p>Seamless booking processes allow users to easily reserve rooms, often with flexible payment options. Integration of real-time availability updates ensures accuracy, preventing overbooking or inconvenience.</p>
           
//           </div>
//           <div className='row image'>
//             <img src='/images/feature-img-1.jpg' alt='' />
//             <div className='control-btn'>
//               <button className='prev'>
//                 <i className='fas fa-play'></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default About
import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"

import HeadTitle from "../../common/HeadTitle/HeadTitle"
import Footer from "../../common/Footer/Footer"
const About = () => {
  return (
    <>
      
   <HeadTitle/>
      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Our <span>Features</span>
            </h1>
            <p>Welcome to our exquisite hotel, where every detail is crafted to provide an unparalleled experience. Immerse yourself in the allure of our thoughtfully designed accommodations, from luxurious suites to comfortable standard rooms, each adorned with modern amenities and captivating views.</p>
            <p>Our prime location, conveniently accessible with detailed maps and directions, places you within reach of key landmarks, attractions, and transportation hubs. Indulge in a culinary journey at our on-site restaurants and bars, offering diverse menus and delectable specialties. Whether you seek relaxation or productivity, our facilities cater to your needs, boasting fitness centers, pools, spas, and well-equipped conference rooms for events of any scale. </p>
            <p>For inquiries or reservations, our dedicated team is just a call or click away. Experience the epitome of hospitality at our hotel, where every moment is crafted to exceed your expectations.</p>
            {/* <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button> */}
          </div>
          <div className='row image'>
            <img src='/images/feature-img-1.jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
              <i className='fas fa-play'></i>
              </button>
              
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default About