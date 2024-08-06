import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#E5C643] h-[200px]  text-white font-bold  lg:h-[350px] w-full flex flex-col items-center justify-center'>
        <h1 className='w-[250px] lg:w-[650px] text-center lg:text-4xl'>
        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </h1>
        <p className='text-sm lg:text-2xl pt-1 lg:mt-3 font-medium'>Type your email down below and be young wild generation</p>
<div className="relative lg:pt-3 pt-2">
  <input
    type="text"
    id="Search"
    placeholder="Search for..."
    className="lg:w-[400px] w-[200px] px-2 rounded-md border-gray-200 text-black py-1 lg:py-2.5 pe-10 shadow-sm text-sm"
  />

  <span className="absolute inset-y-0 end-0 grid w-20 lg:w-24 lg:mt-3 mt-2 place-content-center">
    <button type="button" className=" text-white bg-black lg:px-5 lg:py-1 text-sm lg:text-lg  px-2 rounded-sm lg:rounded-md" >
        SEND
    </button>
  </span>
</div>
    </div>
  )
}

export default Contact