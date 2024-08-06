import { useRouter } from 'next/navigation'
import React from 'react'

const AddToBagModel = ({setIsOpen}) => {
    const router=useRouter()
    const handleCheckout=()=>{
        router.push('/cart')
    }
  return (
    <div>
         <div>
           <div className="sm:hidden">
           <div className="fixed inset-0 z-50 overflow-hidden block">
        <div className="fixed inset-0 bg-white p-2 " >
         <div className='flex items-center justify-between p-3 border-b-2'>
          <h1 className='font-medium text-2xl '>Shapping Bag</h1>
          <button onClick={()=>setIsOpen(false)}>
           <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            class="size-8 items-end">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
           </button>
         </div>
       <div className='p-3'>
        <div className='flex justify-between border-b-2 pb-5'>
            <img
              src={'/assets/products/girl5.png'}
              alt=""
              className="transition  duration-500 group-hover:scale-103 h-[150px] lg:h-[500px] w-1/3 object-cover rounded-md lg:rounded-lg"
              />
              <div className='pl-5'>
                <div className='flex justify-between items-center'>
                <p className='font-bold'>Alpaca Wool Crewneck Sweater</p>
                <button >
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                class="size-6 items-end">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                 </svg>
                  </button>
                </div>
                <p className='text-gray-500 py-2 font-semibold'>Beign</p>
                <p className='text-gray-500  font-bold'>RS: 600</p>
                <div className='flex items-center border-2 border-gray-500 my-2 rounded-xl w-[100px] justify-between px-2'>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>

                    </button>
                    <p>1</p>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                    </button>

                </div>

              </div>
        </div>

       </div>
        <div className='border-t-2 absolute bottom-0 py-2'>
            <p className='text-gray-500 text-center'>Shipping & taxes calculated at checkout</p>
        <button onClick={handleCheckout}  className='bg-black py-3 mx-10 px-10 my-2 text-white text-lg rounded-md'>Go To Checkout RS:1200</button>
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
          <div className='flex items-center justify-between p-3 border-b-2'>
          <h1 className='font-medium text-2xl lg:text-xl '>Shapping Bag</h1>
          <button onClick={()=>setIsOpen(false)}>
           <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            class="size-8 lg:size-6 items-end">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
           </button>
         </div>
       <div className='p-2'>
        <div className='flex justify-between border-b-2 pb-5'>
            <img
              src={'/assets/products/girl5.png'}
              alt=""
              className="transition  duration-500 group-hover:scale-103 h-[150px]  w-1/3 object-cover rounded-md"
              />
              <div className='pl-5'>
                <div className='flex justify-between items-start'>
                <p className='font-bold lg:text-sm'>Alpaca Wool Crewneck Sweater</p>
                <button >
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                class="size-6 lg:size-5 items-end">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                 </svg>
                  </button>
                </div>
                <p className='text-gray-500 py-2 font-semibold lg:text-sm'>Beign</p>
                <p className='text-gray-500  font-bold lg:text-sm'>RS: 600</p>
                <div className='flex items-center border-2 border-gray-500 my-2 rounded-xl w-[100px] lg:w-[85px] lg:h-[24px] justify-between px-2'>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 lg:size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>
                    </button>
                    <p>1</p>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 lg:size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                    </button>
                </div>

              </div>
        </div>

       </div>
        <div className='border-t-2 absolute bottom-0 py-2 flex justify-center flex-col'>
            <p className='text-gray-500 text-center lg:text-sm'>Shipping & taxes calculated at checkout</p>
        <button onClick={handleCheckout} className='bg-black py-3 mx-10 lg:mx-2 px-10 my-2 text-white  lg:text-sm rounded-md'>Go To Checkout RS:1200</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
          </div>
    </div>
  )
}

export default AddToBagModel