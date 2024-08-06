import React from 'react'

const Login = () => {
  return (
    <div className='bg-[#E5C643] h-screen text-white font-bold   w-full flex flex-col items-center justify-center'>
        <h1 className=' text-center lg:text-4xl'>
        Create An Account
        </h1>
        <p className='text-sm lg:text-2xl pt-1 lg:mt-3 font-medium w-[300px] lg:w-[600px] text-center'>Create an account with us to enjoy all our services and perks!</p>
  <input
    type="text"
    id="Search"
    placeholder="Email Address ..."
    className="lg:w-[300px] w-[200px] px-2 rounded-md border-gray-200 text-black py-1 lg:my-2 my-1 lg:py-2.5 pe-10 shadow-sm text-sm"
  />
    <input
    type="text"
    id="Search"
    placeholder="Password"
    className="lg:w-[300px] w-[200px] px-2 rounded-md border-gray-200 text-black py-1 lg:my-2 my-1 lg:py-2.5 pe-10 shadow-sm text-sm"
  />
    <button type="button" className=" text-white bg-black lg:px-10 lg:my-3 lg:py-2 py-1.5 text-xs my-2 lg:text-sm  px-3 rounded-sm lg:rounded-md" >
        CREATE ACCOUNT
    </button>
    </div>
  )
}

export default Login