import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#000] h-[150px] lg:p-10 px-2 text-white font-bold pt-6  lg:h-[250px] w-full flex flex-row lg:justify-around lg:pt-20   justify-center'>
    <div className='flex flex-col  '>
    <h1 className='font-bold text-xs lg:text-3xl'>FASHION</h1>  
    <p className='lg:w-[300px] font-normal w-[180px] py-2 text-[10px] lg:text-lg'>Complete your style with awesome clothes from us.in</p>
    <Image
          alt=""
          src="/assets/logo/social.png"
          width={100}
          height={100}
          className="lg:h-[35px] lg:w-[200px] h-[20px] w-[100px]"
        />
    </div>
    <div className='mx-1'>
        <h1 className='text-[#D9D9D9] py-2 text-[10px] lg:text-xl'>Company</h1>
        <ul className='text-[#8E8E8E] font-normal text-[8px] lg:text-lg'>
           
            <li>About</li>
            <li>Contact us</li>
            <li>Support</li>
            <li>Careers</li>
        </ul>
    </div>
    <div className='mx-1'>
        <h1 className='text-[#D9D9D9] py-2 text-[10px] lg:text-xl' >Quick Link</h1>
        <ul className='text-[#8E8E8E] font-normal text-[8px] lg:text-lg'>
         
            <li>Share Location</li>
            <li>Orders Tracking</li>
            <li>Size Guide</li>
            <li>FAQs</li>
        </ul>
    </div>
    <div className='mx-1'>
        <h1 className='text-[#D9D9D9] py-2 text-[10px] lg:text-xl'>Legal</h1>
        <ul className='text-[#8E8E8E] font-normal text-[8px] lg:text-lg'>
            <li>Terms & conditions</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
    


    </div>
  )
}

export default Footer