import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <>
      <div className='h-[28rem] mt-20'>
        <div>
          <div className='flex'>
            <img src="https://media.istockphoto.com/id/496603666/vector/flat-icon-check.jpg?s=612x612&w=0&k=20&c=BMYf-7moOtevP8t46IjHHbxJ4x4I0ZoFReIp9ApXBqU="
              className="w-60 ml-[17rem] mt-10" />
            <p className='text-7xl mt-20 font-bold'>Order Confirmed!</p>
          </div>
          <p className='ml-[32.5rem] -mt-28 text-2xl font-bold text-gray-400 w-[35rem]'>Your order is confirmed, you will be notified by Email and Text very soon.</p>
          <Link to="/">
            <button className="bg-orange-500 text-white px-6 py-4 text-md font-bold rounded-md my-10 mr-8 hover:drop-shadow-xl hover:opacity-95 ml-[40rem]">
              ORDER MORE DELICIOUS FOOD
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Confirmation
