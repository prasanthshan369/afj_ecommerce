import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <div className='bg-[#EBD96B] h-[50px] lg:h-[100px] w-full flex flex-row 
    items-center justify-evenly
    '>
      <Image
      width={100}
      src={'/assets/logo/hm.png'}
      height={100}
      className='w-[50px] lg:w-[100px] object-contain'
      alt='logo'
      />
         <Image
      width={100}
      src={'/assets/logo/obey.png'}
      height={100}
      className='w-[50px] lg:w-[100px] object-contain'
      alt='logo'
      />
         <Image
      width={100}
      src={'/assets/logo/shopify.png'}
      height={100}
      className='w-[50px] lg:w-[100px] object-contain'
      alt='logo'
      />
         <Image
      width={100}
      src={'/assets/logo/lacoste.png'}
      height={100}
      className='w-[50px] lg:w-[100px] object-contain'
      alt='logo'
      />
         <Image
      width={100}
      src={'/assets/logo/levis.png'}
      height={100}
      className='w-[50px] lg:w-[100px]  object-contain'
      alt='logo'
      />
         <Image
      width={100}
      src={'/assets/logo/amazon.png'}
      height={100}
      className='w-[50px] lg:w-[100px] object-contain'
      alt='logo'
      />
    </div>
  )
}

export default Brands