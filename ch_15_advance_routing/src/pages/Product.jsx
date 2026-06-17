import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex items-center justify-center gap-x-3 mt-2 text-white'>
            <Link to="/product/men">Mens</Link>
            <Link to="/product/women">Womens</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Product