import React, { useState } from "react"
import "./BookingsHome.css"
import BookingsData from "./BookingsData"
 import BookingsCard from "./BookingsCard"

const AllBookings = () => {
  const [items, setIems] = useState(BookingsData)
  return (
    <>
      <section className='blog top'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <BookingsCard key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllBookings