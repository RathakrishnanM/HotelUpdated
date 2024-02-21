import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box'>
        <i className='fa fa-quote-left'></i>
        <div className='details flex '>
           <div className='name'>
            <h3>{props.name}</h3>
           
          </div>
        </div>
        <div className='para'>
          <p>{props.desc}</p>
        </div>
        <span>{props.post}</span>
        <hr />
         
      </div>
    </>
  )
}

export default Card