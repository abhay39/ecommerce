import React from 'react'
import TopNav from './header/TopNav'
import Category from './header/Category'
import Banner from './header/Banner'
import ListingProducts from './header/ListingProducts'

const Dashboard = () => {
  return (
    <>
        <TopNav />
        <Category />
        <Banner />
        <ListingProducts />
    </>
  )
}

export default Dashboard