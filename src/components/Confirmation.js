import React, { useEffect, useState } from 'react'

const Confirmation = () => {
  const [delay,setDelay] = useState(false);
  const timerId = setTimeout(()=>{
      setDelay(true);
  },1000)
  useEffect(()=>{
    return()=>clearTimeout(timerId)
  },[timerId])
  return (
    <>
    <div className='h-[28rem] mt-20'>
      {delay==true?<div>
        <div className='flex'>
        <img src="https://media.istockphoto.com/id/496603666/vector/flat-icon-check.jpg?s=612x612&w=0&k=20&c=BMYf-7moOtevP8t46IjHHbxJ4x4I0ZoFReIp9ApXBqU="
        className="w-60 ml-[17rem] mt-10"/>
        <p className='text-7xl mt-20 font-bold'>Order Confirmed!</p>
        </div>
      <p className='ml-[32.5rem] -mt-28 text-2xl font-bold text-gray-400 w-[35rem]'>Your order is confirmed, you will be notified by Email and Text very soon.</p>
      </div>:<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9CkNKG5D1Oc9AHBIGqR46VRUDEVLS_EGFA&usqp=CAU' className='ml-[38rem]'/>}
    </div>
    </>
  )
}

export default Confirmation
