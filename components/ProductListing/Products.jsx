import React from 'react'
import ProductItems from '../ProductListing/ProductItems'

const Products = () => {
  return (
    <div>
       <div className="lg:mt-8 mt-4 grid gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-4">
            <ProductItems image="girl1.png" title="Hoodies" desc="Rs:1000"/>
            <ProductItems image="girl4.png" title="Coats" desc="Rs:2000"/>
            <ProductItems image="girl3.png" title="Sweetshirt" desc="Rs:3000"/>
            <ProductItems image="girl1.png" title="Hoodies" desc="Rs:1040"/>
            <ProductItems image="girl4.png" title="Coats" desc="Rs:100"/>
            <ProductItems image="girl5.png" title="Sweetshirt" desc="Rs:700"/>
            <ProductItems image="girl2.png" title="Coats" desc="Rs:100"/>
            <ProductItems image="girl3.png" title="Sweetshirt" desc="Rs:700"/>
        </div>
    </div>
  )
}

export default Products