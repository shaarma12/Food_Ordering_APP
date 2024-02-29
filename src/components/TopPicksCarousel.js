import React from 'react'
import { Coupon_IMG } from '../utils/constant'

const TopPicksCarousel = ({ info }) => {
    const { name, description, imageId, isVeg, defaultPrice } = info
    console.log("from topPicksCorousel", name, description, isVeg, imageId, defaultPrice)
    return (
        <div>
        </div>
    )
}

export default TopPicksCarousel
