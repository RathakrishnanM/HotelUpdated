// import React from 'react'
// import HeadTitle from '../../common/HeadTitle/HeadTitle'
// import AllBookings from './AllBookings'
// const Bookings = () => {
//   return (
//     <div>
//         <HeadTitle/>
//         <AllBookings/>
//     </div>
//   )
// }

// export default Bookings
import React from "react"
import HeadTitle from "../../common/HeadTitle/HeadTitle"
import UserList from "./BookingBackend"
import AllBookings from "./AllBookings"

const Blog = () => {
  return (
    <>
      <HeadTitle />
      <AllBookings />
      <UserList/>
    </>
  )
}
export default Blog;


// import React, { useState } from 'react';

// const BookingPage = () => {
//   // State for form inputs
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');
//   const [numGuests, setNumGuests] = useState(1);

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic for handling the form data (e.g., sending it to a server)
//     console.log('Form submitted:', { checkInDate, checkOutDate, numGuests });
//   };

//   return (
//     <div>
//       <h2>Hotel Booking</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Check-in Date:
//           <input
//             type="date"
//             value={checkInDate}
//             onChange={(e) => setCheckInDate(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Check-out Date:
//           <input
//             type="date"
//             value={checkOutDate}
//             onChange={(e) => setCheckOutDate(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Number of Guests:
//           <input
//             type="number"
//             value={numGuests}
//             onChange={(e) => setNumGuests(e.target.value)}
//             min="1"
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Book Now</button>
//       </form>
//     </div>
//   );
// };

// export default BookingPage;