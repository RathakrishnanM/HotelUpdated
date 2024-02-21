// import React from 'react'
// import Card from './Card'
// const Works = () => {
//   return (
//     <>
//         <section className='popular works'>
//             <div className='container'>
//                 <h1>WoW Stays<br/><b>Just As Many Experiences<br/>to Discover</b>
//                 </h1>
//             </div>
//             <div className="content">
//                 <Card/>
//             </div>
//         </section>
//     </>
//   )
// }

// export default Works
import React from "react"

import "./Works.css"
import Card from "./Card"
import Wdata from "./Wdata"

const Works = () => {
  return (
    <>
      <section className='popular works'>
        <div className='container'>
          <div className='heading'>
          <h1>WoW Stays<br/><b>Just As Many Experiences<br/>to Discover</b></h1>
           
          </div>

          <div className='content grid'>
            {Wdata.map((value, index) => {
              return <Card key={index} cover={value.cover} title={value.title} desc={value.desc} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Works