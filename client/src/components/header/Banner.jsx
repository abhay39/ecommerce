import React from 'react'
import "./banner.css"

const data=[
    {
        id:1,
        icon:require("../../images/banner-ecommerce.jpg")
    },
]
const Banner = () => {
  return (
    <div>
        <div className="carousel-inner">
               {data.map((item)=>{
                return(
                    <div id={item.id} className="carousel-item active">
                        <img className="profile" src={item.icon} alt="First slide" />
                    </div>
                )
               })}
        </div>
    </div>
  )
}

export default Banner