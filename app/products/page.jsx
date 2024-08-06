import React from 'react'
import Filter from '../../components/ProductListing/Filter'
import Products from '../../components/ProductListing/Products'
import Header from '../../components/ProductListing/Header'
import Footer from '../../components/ProductListing/Footer'

const ProductListing = () => {
  return (
    <div >
      <Header/>
      <div className='p-2'>
      <Filter/>
      <Products/>
      </div>
      <Footer/>
 
    </div>
  )
}

export default ProductListing