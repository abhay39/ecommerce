import React from 'react'
import TopNav from '../header/TopNav'
import "./order.css"
import Lottie from "lottie-react";
import truck from "../../images/d.json"

const OrderNow = () => {
  return (
    <div>
        <TopNav />
        <h1>Order Now</h1>
        <Lottie animationData={truck} style={{
          height:350,width:350
        }} loop={true} />;
    </div>
  )
}

export default OrderNow