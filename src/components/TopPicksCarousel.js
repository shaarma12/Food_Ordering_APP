import React from 'react'
import { CAROUSEL_IMG } from '../utils/constant'

const TopPicksCarousel = ({ info }) => {
    const { creativeId } = info
    const { name, description, isVeg, defaultPrice } = info?.dish?.info
    console.log("from topPicksCorousel", name, description, isVeg, creativeId, defaultPrice)
    return (
        <div>
            <img src={CAROUSEL_IMG + creativeId} className='h-[28rem] w-[26rem] mx-[30rem] -ml-0' />
        </div>
    )
}

export default TopPicksCarousel
