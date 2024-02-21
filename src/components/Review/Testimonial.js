import React from "react"
import HeadTitle from "../../common/HeadTitle/HeadTitle"
import AllItem from "./AllItem"
import Review from "./Review"
import Paragraph from "./Paragraph"
import Footer from "../../common/Footer/Footer"

const Testimonial = () => {
  return (
    <>
      <HeadTitle />
      <Paragraph/>
      
      <br/>
      <br/>
      <Review/>
      <AllItem />
      <Footer/>
    </>
  )
}

export default Testimonial