import React from 'react'
import SmallScreenRes from './SmallScreenRes'
import LargeScreenRes from './LargeScreenRes'

const Restaurant = () => {
  return (
    <>
      {window.innerWidth <= 768 ? <SmallScreenRes /> : <LargeScreenRes />}
    </>
  )
}

export default Restaurant
