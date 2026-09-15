import React, { useState } from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Products from '../ui/Products'
import Data from '../assets/assets'

const Shop = () => {

  return (
    <>
      <div className='bg-[url(https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop)] min-h-screen bg-cover bg-center bg-fixed bg-gray-950'>
        <div className="bg-gradient-to-b from-black/95 via-black/40 to-black/95 min-h-screen w-full">
          <div className="font-extralight text-white gothic text-6xl md:text-8xl pt-40 text-center">SHOP</div>
          <div className=" flex justify-center items-center gap-2 mt-3 text-lg text-white">
            <Link to="/" className='hover:text-[#ff4955]'>Home </Link>
            <MdKeyboardDoubleArrowRight />
            Shop
          </div>
          <div className='text-md text-white mt-20 px-20'>Showing 18 results</div>
          <div className="grid grid-cols-4 gap-10 px-20 mt-10 pb-100">
            {Data.map((item) => {
              return (
                <Products item={item} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop