import React from 'react'
import SortDropdown from './SortDropdown'
import FilterDropdown from './FilterDropdown'

const Filter = () => {
  return (
    <div className='py-5 lg:py-10'>
        <h1 className='text-2xl font-semibold lg:text-3xl py-2'>Shop</h1>
       <div className=' lg:flex lg:flex-row lg:justify-between items-center border-b-2'>
       <div className='grid grid-cols-2 lg:grid-flow-col gap-2  my-2'>
    <button className=' button border-2 rounded-xl py-0.5 text-sm px-2 mx-2 lg:text-base lg:rounded-lg lg:py-2 lg:px-5'>
        Outerwear
    </button>
    <button className=' button border-2 rounded-xl py-0.5 text-sm px-2 mx-2 lg:text-base lg:rounded-lg lg:py-2 lg:px-5'>
        Dresses
    </button>
    <button className=' button border-2 rounded-xl py-0.5 text-sm px-2 mx-2 lg:text-base lg:rounded-lg lg:py-2 lg:px-5'>
        Shirts
    </button>
<button className=' button border-2 rounded-xl py-0.5 text-sm px-2 mx-2 lg:text-base lg:rounded-lg lg:py-2 lg:px-5'>
        Paints & Leggins
    </button>
    <button className=' button border-2 rounded-xl py-0.5 text-sm px-2 mx-2 lg:text-base lg:rounded-lg lg:py-2 lg:px-5'>
        Shirts
    </button>
  
</div>
<div className='flex flex-row items-center justify-around  lg:justify-around lg:w-1/3 w-full'>
  <SortDropdown/>
  <FilterDropdown/>
</div>

       </div>
    </div>
  )
}

export default Filter