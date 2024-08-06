import React from 'react'
import CartItem from './CartItem'
import ProductItems from '../ProductListing/ProductItems'
const Cart = () => {
  return (
    <div className='py-5'>
        <h1 className='text-center text-xl font-semibold'>Shopping Bag</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            <CartItem/>
            <CartItem/>
            <div className='m-5'>
                <div className='border-2 rounded-md'>
                    <p className='text-center text-gray-500 border-b-2 px-2 py-3'>Order Summary</p>
                    <div className='flex justify-between items-center border-b-2 px-2 py-3'>
                        <p>Subtotal</p>
                        <p>Rs:500</p>
                    </div>
                    <div className='flex justify-between items-center px-2 py-3'>
                        <p>Bag Total</p>
                        <p>Rs:500</p>
                    </div>
                </div>
                <div className='border-2 rounded-md mt-2'>
                <p className='text-center text-gray-500 px-2 py-2'>
                    Add a gift message to your order</p>
                    <div className='border-2 m-2 h-[100px] rounded-sm'>

                    </div>
                 </div>
                 <p className='text-center text-gray-500 px-2 py-1'> Shipping & taxes calculated at checkbox</p>
                    <div className='flex flex-row justify-center'>
                 <button  className='bg-black py-2 mx-10 lg:mx-2 px-10 my-2 text-white  lg:text-sm rounded-md'>Go To Checkout</button>
                 </div>
            </div>
            </div>
            <div className='px-5'>
            <h1 className='text-center pt-5 lg:text-xl'>What To Wear now</h1>
            <div className="lg:mt-8 mt-4 grid gap-2 lg:gap-4 grid-cols-3">
            <ProductItems image="girl2.png" title="Hoodies" desc="Rs:1000"/>
            <ProductItems image="girl5.png" title="Coats" desc="Rs:2000"/>
            <ProductItems image="girl1.png" title="Sweetshirt" desc="Rs:3000"/>
        </div>
           </div>
    </div>
  )
}

export default Cart