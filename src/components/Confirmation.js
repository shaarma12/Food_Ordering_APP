import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <>
      <div className='h-[28rem] md:mt-20 mt-80'>
        <div>
          <div className='flex'>
            <img src="https://media.istockphoto.com/id/496603666/vector/flat-icon-check.jpg?s=612x612&w=0&k=20&c=BMYf-7moOtevP8t46IjHHbxJ4x4I0ZoFReIp9ApXBqU="
              className=" md:w-60 w-[35rem] ml-[17rem] mt-10" />
            <p className='md:text-7xl text-9xl mt-20 font-bold'>Order Confirmed!</p>
          </div>
          <p className='md:ml-[32.5rem] ml-[41rem] md:-mt-28 -mt-12 md:text-2xl text-4xl font-bold text-gray-400 md:w-[35rem] w-[40rem]'>Your order is confirmed, you will be notified by Email and Text very soon.</p>
          <Link to="/">
            <button className="bg-orange-500 text-white md:px-6 px-60 md:py-4 py-5 md:text-lg text-3xl font-bold rounded-md my-10 mr-8 hover:drop-shadow-xl hover:opacity-95 md:ml-[40rem] ml-[43rem]">
              ORDER MORE DELICIOUS FOOD
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Confirmation
