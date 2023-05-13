import React from 'react'
import "./category.css"

const dummyData=[
    {
        id: 1,
        name: "Grocery",
        icon: require("../../images/grocery.webp")
    },
    {
        id: 2,
        name: "Mobiles",
        icon: require("../../images/mobile.webp")
    },
    {
        id: 3,
        name: "Fashion",
        icon: require("../../images/fashion.webp")
    },
    {
        id: 4,
        name: "Electronics",
        icon: require("../../images/electronics.webp")
    },
    {
        id: 5,
        name: "Home",
        icon: require("../../images/home.webp")
    },
    {
        id: 6,
        name: "Appliances",
        icon: require("../../images/appliannces.webp")
    },
    {
        id: 7,
        name: "Travel",
        icon: require("../../images/travel.webp")
    },
    {
        id: 8,
        name: "Top Offers",
        icon: require("../../images/topoffer.webp")
    },
    {
        id: 9,
        name: "Beauty",
        icon: require("../../images/beauty.webp")
    },
    {
        id: 10,
        name: "Two Wheelers",
        icon: require("../../images/two whellers.webp")
    },
    
]
const Category = () => {
  return (
    <div className='container'>
        <div className='sam'>
            {dummyData.map((item)=>{
                return(
                    <div className='lists'>
                        <img id='photo' alt='image' src={item.icon} height={100} width={200}/>
                        <p id="catName">{item.name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Category