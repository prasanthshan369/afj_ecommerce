// components/Dropdown.jsx
"use client"
import { useState } from 'react';

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className='flex items-center'>
      <button
        className="px-4 py-2 text-gray-800 rounded focus:outline-none focus:shadow-outline"
        onClick={toggleDropdown}
      >
        Filter 
      </button>

      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

        </span>
        </div>

      {isOpen && (
        <div>
           <div className="sm:hidden">
           <div className="fixed inset-0 z-50 overflow-hidden block">
        <div className="fixed inset-0 bg-white p-2 " >
         <div className='flex items-center justify-between p-3 border-b-2'>
          <p></p>
          <h1 className='font-medium text-2xl '>Filters</h1>
          <button onClick={()=>setIsOpen(false)}>
           <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            class="size-8 items-end">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
           </button>
         </div>
        <div className='p-3'>
        <div className='py-3'>
          <p className='font-medium text-xl'>Colors</p>
          <div className='py-3 grid grid-cols-7 gap-y-3'>
            <p className='w-7 h-7 rounded-full bg-orange-200'></p>
            <p className='w-7 h-7 rounded-full bg-black'></p>
            <p className='w-7 h-7 rounded-full bg-green-700'></p>
            <p className='w-7 h-7 rounded-full bg-orange-800'></p>
            <p className='w-7 h-7 rounded-full bg-blue-600'></p>
            <p className='w-7 h-7 rounded-full bg-orange-500'></p>
            <p className='w-7 h-7 rounded-full bg-gray-500'></p>
            <p className='w-7 h-7 rounded-full bg-red-300'></p>
            <p className='w-7 h-7 rounded-full bg-red-600'></p>






          </div>
          <p className='font-medium text-xl'>Material</p>
          <div className='py-3'>
          <p className='font-normal text-gray-500 py-3'>Cotton(4)</p>
          <p className='font-normal text-gray-500 py-3'>Pima(6)</p>
          <p className='font-normal text-gray-500 py-3'>Silk(2)</p>

          </div>
          <p className='font-medium text-xl'>Size</p>
          <div className='py-3'>
          <p className='font-normal text-gray-500 py-3'>Extra small(99)</p>
          <p className='font-normal text-gray-500 py-3'>Small(66)</p>
          <p className='font-normal text-gray-500 py-3'>Medium(25)</p>
          <p className='font-normal text-gray-500 py-3'>Large(50)</p>
          <p className='font-normal text-gray-500 py-3'>Extra Medium(45)</p>


          </div>
         </div>
        </div>
        <div className='border-t-2'>
        <button className='bg-black py-3 mx-20 px-10 my-3 text-white text-xl  w-1/2  rounded-md'>See Result</button>
        </div>
        </div>
      </div>
        </div>

        {/* Desktop view (visible on medium screens and above) */}
        <div className="hidden sm:block">
        <div className="">
           <div className="fixed inset-0 z-50 overflow-hidden block">
        <div className="fixed inset-0 bg-gray-400 opacity-90" ></div>
        <div className="fixed right-0 z-50 bg-white shadow-lg rounded-t-lg overflow-hidden">
          <div className="px-2 py-3 h-screen w-[300px]  bg-white ">
         <div className='flex items-center justify-between p-2 border-b-2'>
          <p></p>
          <h1 className='font-medium text-xl '>Filters</h1>
          <button onClick={()=>setIsOpen(false)}>
           <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            class="size-6 items-end">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
           </button>
         </div>
        <div className='p-3'>
        <div>
          <p className='font-medium text-base'>Colors</p>
          <div className='py-3 grid grid-cols-7 gap-y-3'>
            <p className='w-5 h-5 rounded-full bg-orange-200'></p>
            <p className='w-5 h-5 rounded-full bg-black'></p>
            <p className='w-5 h-5 rounded-full bg-green-700'></p>
            <p className='w-5 h-5 rounded-full bg-orange-800'></p>
            <p className='w-5 h-5 rounded-full bg-blue-600'></p>
            <p className='w-5 h-5 rounded-full bg-orange-500'></p>
            <p className='w-5 h-5 rounded-full bg-gray-500'></p>
            <p className='w-5 h-5 rounded-full bg-red-300'></p>
            <p className='w-5 h-5 rounded-full bg-red-600'></p>






          </div>
          <p className='font-medium text-base'>Material</p>
          <div className='py-2'>
          <p className='font-normal text-gray-500 py-1'>Cotton(4)</p>
          <p className='font-normal text-gray-500 py-1'>Pima(6)</p>
          <p className='font-normal text-gray-500 py-1'>Silk(2)</p>

          </div>
          <p className='font-medium text-base'>Size</p>
          <div className='py-2'>
          <p className='font-normal text-gray-500 py-1'>Extra small(99)</p>
          <p className='font-normal text-gray-500 py-1'>Small(66)</p>
          <p className='font-normal text-gray-500 py-1'>Medium(25)</p>
          <p className='font-normal text-gray-500 py-1'>Large(50)</p>
          <p className='font-normal text-gray-500 py-1'>Extra Medium(45)</p>


          </div>
         </div>
        </div>
        <div className='border-t-2 flex items-center flex-row justify-center'>
        <button className='bg-black py-3 px-14 my-2 text-white text-base    rounded-md'>See Result</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
          </div>
 
        
      )}
    </div>
  );
};


export default FilterDropdown;
