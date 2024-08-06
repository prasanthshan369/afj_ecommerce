import React from 'react'
import Product from '/components/Landing/Product'

const FavouritesProducts = () => {
  return (
    <div className='p-5 lg:p-10'>
    <h1 className='font-bold text-2xl lg:text-4xl'>Favourites Products</h1> 
    <div className="lg:mt-8 mt-4 grid gap-4 lg:gap-8 grid-cols-2">
    <Product image="girl4.png" title="Trending On" desc="Explore Now!"/>
    <Product image="girl5.png" title="All Under $40" desc="Explore Now!"/>

    </div>
</div>
  )
}

export default FavouritesProducts