import Link from 'next/link'
import React from 'react'

const Product = ({title,desc,image}) => {
  return (
   <Link href="/products/123" className="group block">
  <img
    src={'/assets/products/'+image}
    alt=""
    className="transition duration-500 group-hover:scale-103 h-[200px] lg:h-[500px] w-full object-cover rounded-md lg:rounded-lg"
  />

  <div className="mt-3 lg:px-2 flex justify-between items-center text-sm">
    <div>
      <h3 className="text-gray-900 text-xs font-bold lg:text-lg group-hover:underline group-hover:underline-offset-4">
        {title} 
      </h3>
      <h3 className="text-gray-500 text-xs lg:text-base group-hover:underline group-hover:underline-offset-4">
         {desc}
      </h3>
     
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 lg:size-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

  </div>
</Link>
  )
}

export default Product