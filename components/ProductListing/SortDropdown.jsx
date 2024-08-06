// components/Dropdown.jsx
"use client"
import { useState } from 'react';

const SortDropdown = () => {
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
        Sort 
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
        <div className="fixed inset-0 bg-gray-300 opacity-90" ></div>
        <div className="fixed inset-x-0 bottom-0 z-50 bg-white shadow-lg rounded-t-lg overflow-hidden">
          <div className="px-4 py-6 h-[300px]">
   <div className='flex flex-row justify-between items-center border-b-2 pbb-3'>
  <p></p>
<h2 className="text-2xl font-bold text-center">Sort</h2>
           <button onClick={()=>setIsOpen(false)}>
           <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            class="size-8 items-end">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
           </button>
  </div>
  <div className='py-5 gap-5 px-5'>
    <p className='font-medium text-xl py-2'>Featured</p>
    <p className='font-normal text-xl py-2'>Best Selling</p>
    <p className='font-normal text-xl py-2'>Price,low to high</p>
    <p className='font-normal text-xl py-2'>Price,high to low</p>



  </div>

          </div>
        </div>
      </div>
        </div>

        {/* Desktop view (visible on medium screens and above) */}
        <div className="hidden sm:block">
        <div className="absolute right-0 mt-2 py-2 px-3 w-48 bg-white rounded-lg shadow-xl z-10">
    <p onClick={()=>setIsOpen(false)} className='font-normal cursor-pointer text-lg py-1'>Featured</p>
    <p onClick={()=>setIsOpen(false)} className='font-light cursor-pointer  text-lg py-1'>Best Selling</p>
    <p onClick={()=>setIsOpen(false)} className='font-light cursor-pointer text-lg py-1'>Price,low to high</p>
    <p onClick={()=>setIsOpen(false)} className='font-light cursor-pointer text-lg py-1'>Price,high to low</p>

        </div>
        </div>
          </div>
 
        
      )}
    </div>
  );
};

export default SortDropdown;
