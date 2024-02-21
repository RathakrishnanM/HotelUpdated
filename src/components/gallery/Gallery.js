import React from "react"
import Card from "./Card"
import "./Gallery.css"
import GalleryData from "./GalleryData"
import HeadTitle from "../../common/HeadTitle/HeadTitle"
import Footer from "../../common/Footer/Footer"

const Gallery = () => {
  return (
    <>
      
     <HeadTitle />
      <section className='gallery top'>
      
        <div className='container grid'>
          {GalleryData.map((value) => {
            return <Card imgaes={value.img} title={value.title} />
          })}
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Gallery
// import React from "react";
// import Slider from "react-slick";
// import Card from "./Card";
// import "./Gallery.css";
// import GalleryData from "./GalleryData";
// import HeadTitle from "../../common/HeadTitle/HeadTitle";
// import Footer from "../../common/Footer/Footer";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const Gallery = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Adjust the number of slides shown at once
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <HeadTitle />
//       <section className="gallery top">
//         <div className="container grid">
//           <Slider {...settings}>
//             {GalleryData.map((value) => {
//               return <Card imgaes={value.img} title={value.title} />;
//             })}
//           </Slider>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Gallery;