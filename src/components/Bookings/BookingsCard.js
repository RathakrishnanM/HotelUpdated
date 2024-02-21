// import React from "react"
// import { Link } from "react-router-dom"

// const BookingsCard = ({ item: { id, cover, title, desc, para, catgeory, date } }) => {
//   return (
//     <>
//       <div className='items'>
//         <div className='img'>
//           <img src={cover} alt='Gallery Image' />
//         </div>

//         <div className='category flex_space'>
//           <span>{date}</span>
//           <label>{catgeory}</label>
//         </div>

//         <div className='details'>
//           <h3>{title}</h3>
//           <p>{para}</p>
//         </div>

//         <Link to={`/blogsingle/${id}`} className='blogItem-link'>
//           <button class="button1">Book now <i className='fa fa-long-arrow-right'></i></button> 
//         </Link>
//       </div>
//     </>
//   )
// }

// export default BookingsCard
import React from "react"
import { Link } from "react-router-dom"

const BookingsCard = ({ item: { id, cover, title, desc, para, catgeory, date } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={cover} alt='Gallery Image' />
        </div>

        <div className='category flex_space'>
          <span>{date}</span>
          {/* <label>{catgeory}</label> */}
        </div>

        <div className='details'>
          <h3>{title}</h3>
          {/* <p>{para}</p> */}
          <i class='fas fa-solid fas fa-user'></i>3
          <b>,</b>
          <i class="fas fa-smoking-ban"></i>,350 sqft
        
        </div>

        <Link to={`/blogsingle/${id}`} className='blogItem-link'>
          <button class="button1">Explore More <i className='fa fa-long-arrow-right'></i></button> 
        </Link>
      </div>
    </>
  )
}

export default BookingsCard