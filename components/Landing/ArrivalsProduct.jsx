import React from 'react'
import Product from '/components/Landing/Product'
import Link from 'next/link'
const ArrivalsProduct = () => {
  return (
    <div className='p-5 lg:p-10'>
      <div className='flex flex-row justify-between items-center'>
      <h1 className='font-bold text-2xl lg:text-4xl'>New Arrivals</h1> 
     <Link href={'/products'}>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 lg:size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" />
</svg>
     </Link>

      </div>
        <div className="lg:mt-8 mt-4 grid gap-2 lg:gap-4 grid-cols-3 lg:grid-cols-3">
            <Product image="girl1.png" title="Hoodies" desc="Explore Now!"/>
            <Product image="girl2.png" title="Coats" desc="Explore Now!"/>
            <Product image="girl3.png" title="Sweetshirt" desc="Explore Now!"/>

        </div>
        <div className="mt-4 grid gap-2 lg:gap-4 grid-cols-3 lg:grid-cols-3">
        <Product image="girl3.png" title="Parkas" desc="Explore Now!"/>
        <Product image="girl2.png" title="Trees" desc="Explore Now!"/>
        <Product image="girl1.png" title="T-shirst" desc="Explore Now!"/>

        </div>
   
    </div>
  )
}

export default ArrivalsProduct