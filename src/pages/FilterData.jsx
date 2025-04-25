import React from 'react'
import { useSelector } from 'react-redux'
import ProductsCards from '../components/ProductsCards'
import NoProduct from '../assets/NoProduct.png'

const FilterData = () => {
     const filterProducts = useSelector(state  =>state.product.filteredData)
  return (

   <div className="  mx-auto py-12  px-4 md:px-16 lg:px-24">
    {filterProducts.length > 0 ? 
    <>
    <h2 className=" text-2xl font-bold mb-4 text-center">   shop now </h2>
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-6 cursor-pointer">
      {filterProducts.slice(0,10).map(((product) => (
       <ProductsCards product={product}/>
      )))}
    </div>
    </>
    :
    <div className=' flex justify-center '>
<img className='h-96 w-max' src={NoProduct}></img>
    </div>
}
 </div>
  )
}

export default FilterData