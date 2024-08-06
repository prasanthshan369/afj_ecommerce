import Link from 'next/link'
import React from 'react'

const ProductItems = ({title,desc,image}) => {
  return (
    <div>
        <Link href="/products/123" className="group block">
            <div className='relative'>
            <img
    src={'/assets/products/'+image}
    alt=""
    className="transition  duration-500 group-hover:scale-103 h-[250px] lg:h-[500px] w-full object-cover rounded-md lg:rounded-lg"
  />
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute top-2 right-2 font-bold text-gray-100">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

  <div className='absolute bottom-1 right-2'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 font-bold text-gray-100">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

  </div>
            </div>

  <div className="mt-3 lg:px-2 flex justify-between items-center text-sm">
    <div>
      <h3 className="text-gray-900 text-xs font-bold lg:text-lg group-hover:underline group-hover:underline-offset-4">
        {title} 
      </h3>
      <h3 className="text-black text-xs font-bold lg:text-base group-hover:underline group-hover:underline-offset-4">
         {desc}
      </h3>
     
    </div>
  </div>
</Link>
    </div>
  )
}

export default ProductItems