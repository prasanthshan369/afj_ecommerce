import React from 'react'

const CartItem = () => {
  return (
    <div className="overflow-hidden rounded-lg flex flex-col justify-between items-center shadow-xl m-5 border-2 transition hover:shadow-lg p-3">
    <div className='flex flex-row justify-between w-full  pb-2'>
        <p></p>
                <p className='font-bold lg:text-sm text-center text-gray-700'>Alpaca Wool Crewneck Sweater</p>
                <button >
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                class="size-6 lg:size-5 items-end">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                 </svg>
                  </button>
                </div>
                <p className='font-normal lg:text-sm text-center text-gray-500'>Beige</p>
                   <img
                     alt=""
                     src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                     className="h-56 w-1/2 object-cover rounded-sm"
                   />
                     <div className='flex items-center border-2 border-gray-400 my-3 rounded-xl w-[100px] lg:w-[85px] lg:h-[24px] justify-between px-2'>
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
                <div className='border-t-2 py-3 flex flex-row w-full px-10 justify-between items-center '>
                    <p className='text-gray-500 font-medium'>Subtotal</p>
                    <p className='text-gray-500 font-medium'>Rs:2000</p>

                </div>
  
</div>
  )
}

export default CartItem