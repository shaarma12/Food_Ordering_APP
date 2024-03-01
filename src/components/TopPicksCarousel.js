import React from 'react'
import { CAROUSEL_IMG } from '../utils/constant'

const TopPicksCarousel = ({ info }) => {
    const { creativeId } = info
    const { name, description, isVeg, defaultPrice, price } = info?.dish?.info
    console.log("from topPicksCorousel", name, description, isVeg, creativeId, defaultPrice)
    return (
        <div>
            <img src={CAROUSEL_IMG + creativeId} className='h-[28rem] w-[26rem] mx-[30rem] -ml-0' />
            <div className='flex justify-between text-white relative bottom-12 left-4 opacity-100'>
                <div className='flex font-semibold'>
                    <p className='mr-[0.07rem]'>₹</p>
                    <p>{defaultPrice ? defaultPrice / 100 : price / 100}</p>
                </div>
                <button className='px-9 py-2 bg-white text-green-600 z-10 relative right-24 bottom-2 rounded-md text-sm font-medium hover:scale-y-105 transition-all duration-100 hover:drop-shadow-[5px_5px_10px_rgba(255,255,255,1)]'>ADD</button>
            </div>
        </div>
    )
}

export default TopPicksCarousel
