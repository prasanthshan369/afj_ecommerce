"use client"
import { useState } from 'react';

import Breadcrumb from '../ProductDetails/Breadcrumb'
import ProductUserReview from '../ProductDetails/ProductUserReview'
import ProductPagination from '../ProductDetails/ProductPagination'
import ProductItems from '../ProductListing/ProductItems'
import AddToBagModel from '../ProductDetails/AddToBagModel'



const ProductDetail = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle= () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='p-3'>
        <div className='flex lg:flex-row flex-col lg:justify-center'>
            <div className='flex-1'>
            <img
              src={'/assets/products/girl5.png'}
              alt=""
              className="transition  duration-500 group-hover:scale-103 h-[250px] lg:h-[500px] w-full object-cover rounded-md lg:rounded-lg"
              />
            </div>
            <div className='py-3 px-2 lg:pl-5 lg:py-5 flex-1 '>
                <Breadcrumb/>
                <div className=' py-2'>
                    <h1 className='font-semibold text-center lg:text-left'>Alpaca Wool Crewneck Sweater</h1>
                    <h2 className='font-semibold text-center lg:text-left '>Rs:10000</h2>
                    <p className='text-sm px-1 lg:w-[500px]'>color sit amet  ipsum eos id quasi maiores illo laboriosam at aut ex, tenetur dolores architecto fuga amet laborum doloribus molestias ut magnam iste consequatur possimus voluptatum quas!</p>
                </div>
                <div>
                    <p className='font-bold text-base lg:py-3'>Product Color: <span className='font-normal'>Belge</span></p>
          <p className='font-medium text-lg text-gray-500'>Colors</p>
          <div className='py-2 grid grid-cols-8 lg:grid-cols-12 '>
            <p className='lg:w-7 lg:h-7 w-5 h-5 rounded-full bg-orange-200'></p>
            <p className='lg:w-7 lg:h-7 w-5 h-5 rounded-full bg-black'></p>
            <p className='lg:w-7 lg:h-7 w-5 h-5 rounded-full bg-green-700'></p>
            </div>
            
            <div className='lg:py-3'>
                <div className='flex flex-row justify-between'>
                    <p className='font-semibold text-base'>Product Size</p>
                    <p className='font-normal underline text-base'>Size Chart</p>
                </div>
                <div className='py-2 grid grid-cols-8 lg:grid-cols-10 gap-x-3 '>
                    <p className='border-gray-600 font-normal  border-2 rounded-sm text-center'>XS</p>
                    <p className='border-gray-300 font-normal  border-2 rounded-sm text-center'>S</p>
                    <p className='border-gray-300 font-normal  border-2 rounded-sm text-center'>M</p>
                    <p className='border-gray-300 font-normal  border-2 rounded-sm text-center'>L</p>
                    <p className='border-gray-300 font-normal  border-2 rounded-sm text-center'>LX</p>
                </div>
                <div className=' lg:my-3 mx-5 lg:mx-20'>
               <button onClick={handleToggle} className='bg-black py-2 w-full  my-3 text-white text-lg rounded-sm'>Add to Bag</button>
                {isOpen && (
                  <AddToBagModel setIsOpen={setIsOpen}/>
                )
               }
               </div>
               <div className='mx-2 lg:mx-20'>
               <div className='flex items-center justify-between py-2 border-b-2'>
          <p className='font-normal text-lg '>Check-In-Store Available</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
         </svg>
         </div>
         <div className='flex items-center justify-between py-2 border-b-2'>
          <p className='font-normal text-lg '>Fill Details</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
         </svg>
         </div>
         <div className='flex items-center justify-between py-2 border-b-2'>
          <p className='font-normal text-lg '>Fibrication & Care</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
         </svg>
         </div>
         <div className='flex items-center justify-between py-2 border-b-2'>
          <p className='font-normal text-lg '>Shipping & Returns</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
         </svg>
         </div>
               </div>
              
            </div>

                </div>

            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-5 py-3 px-3 lg:border-t-2'>
                <div className='py-3 lg:py-5'>
                <p className='font-medium text-lg text-gray-500'>Design</p>
                <p className='font-bold text-base lg:py-3 py-2'>Airy & Warm </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero fugit incidunt error distinctio, laudantium exercitationem quibusdam! Saepe, quia tempore!</p>
                </div>
                <div className='py-3 lg:py-5'>
                <p className='font-medium text-lg text-gray-500'>Quality</p>
                <p className='font-bold text-base lg:py-3 py-2'>Made In India </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero fugit incidunt error distinctio, laudantium exercitationem quibusdam! Saepe, quia tempore!</p>
                </div>
                <div className='py-3 lg:py-5'>
                <p className='font-medium text-lg text-gray-500'>SUSTAINABILITY</p>
                <p className='font-bold text-base lg:py-3 py-2'>Sustainability Baby Alpaca </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero fugit incidunt error distinctio, laudantium exercitationem quibusdam! Saepe, quia tempore!</p>
                </div>
         </div>
         <p className='font-bold text-base lg:text-lg text-center lg:py-3 py-2'>Elegant Ease </p>
         <p className='font-light text-base lg:text-lg text-center'>Inspiration For Your Essential Wordrabe</p>
         <div className='flex lg:flex-row flex-col justify-between items-center py-5'>
            <img
              src={'/assets/products/girl4.png'}
              alt=""
              className="transition  duration-500 group-hover:scale-103 h-[300px] lg:h-[500px] lg:w-1/2 w-full lg:px-2 py-2 px-1  object-cover rounded-lg lg:rounded-xl"
              />
                 <img
              src={'/assets/products/girl5.png'}
              alt=""
              className="transition  duration-500 group-hover:scale-103 h-[300px] lg:h-[500px] lg:w-1/2 w-full lg:px-2 py-2 px-1 object-cover rounded-lg lg:rounded-xl"
              />
         </div>
         <div className='py-3'>
            <div className='flex items-center'>
            <h1 className='font-bold lg:text-xl pr-2 '>4.1</h1>
                <div class="flex gap-0.5 text-black">
                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
            </div>
            <div>
            <p className='text-gray-500 font-normal'>Based on 14 Reviews</p>
            <ProductUserReview name="Alayane A" desc="This stunning evening gown features a floor-length design with a fitted bodice and flowing skirt" title="Perfect Essential!" date="06/08/2024"/>
            <ProductUserReview name="Prasanth V" title="Dress"  date="05/08/2024" desc="This breezy summer dress is made from lightweight cotton"/>
            <ProductUserReview name="Rahul K" title="Cocktail Party" date="01/08/2024" desc=" Embrace a boho-chic vibe with this maxi dress."/>
         </div>
         <ProductPagination/>
         <div className='py-1'>
            <h1 className='text-center lg:text-xl'>Style With</h1>
            <div className="lg:mt-8 mt-4 grid gap-2 lg:gap-4 grid-cols-3 lg:grid-cols-3">
            <ProductItems image="girl1.png" title="Hoodies" desc="Rs:1000"/>
            <ProductItems image="girl4.png" title="Coats" desc="Rs:2000"/>
            <ProductItems image="girl3.png" title="Sweetshirt" desc="Rs:3000"/>

            </div>
            <h1 className='text-center pt-5 lg:text-xl'>Recently Viewd</h1>
            <div className="lg:mt-8 mt-4 grid gap-2 lg:gap-4 grid-cols-3 lg:grid-cols-3">
            <ProductItems image="girl2.png" title="Hoodies" desc="Rs:1000"/>
            <ProductItems image="girl5.png" title="Coats" desc="Rs:2000"/>
            <ProductItems image="girl1.png" title="Sweetshirt" desc="Rs:3000"/>
            </div>
         </div>

         </div>
    </div>
  )
}

export default ProductDetail