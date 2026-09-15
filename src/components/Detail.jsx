import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../assets/assets'
import { FaCheckCircle, FaMinus, FaPlus } from 'react-icons/fa'
import { TiMinus } from 'react-icons/ti'
import { IoCart } from 'react-icons/io5'
import { FiMinus, FiPlus } from 'react-icons/fi'
import Button from '../ui/Button'
import Products from '../ui/Products'

const Detail = () => {
  
  //  const {id}=useParams()
  //   const item = product.find((e)=>e.id==id)

  //   const [selectimg,setselectimg]= useState(0)

  const {id}=useParams()
  const item = Data.find((e)=>e.id==id)
  const [selectimg,setselectimg]= useState(0)


  return (
    <>
      <div className='bg-black min-h-screen'>
        <div className='pt-40 grid grid-cols-2 px-20 gap-16'>
          <div className="overflow-hidden h-200">
            
            <div className="h-140">
              <img src={item.image[selectimg]} alt="" className='w-full h-full rounded-lg'/>
            </div>

            <div className='grid grid-cols-3 w-80 mt-3'>
                {item.image.map((image,i)=>{
                  return(
                    <div className="w-24 h-24 border border-gray-800 rounded-2xl overflow-hidden" onClick={()=>setselectimg(i)}>
                        <img src={image} alt="" className='w-full h-full object-cover' />
                    </div>
                  )
                })}
            </div>
                
          </div>

          <div className="">
              <div className="text-gray-500 text-sm">
                Home / Cameras / CamElite Visionaries
              </div>
              <div className="text-[#ff4955] mt-4 font-bold md:text-lg">{item.title}</div>
              <div className="font2 text-4xl md:text-6xl mt-2 text-white uppercase gothic leading-tight">
                CamElite Visionaries
              </div>
              <div className="text-2xl mt-4 flex gap-3 items-center">
                <del className='text-gray-600'>$440</del> 
                <span className='text-white font-bold'>$360.8</span>
                <span className='text-gray-400 text-sm font-normal'>& Free Shipping</span>
              </div>
              <div className="text-gray-300 mt-6 leading-relaxed">
                These notebooks redefine the boundaries of what’s possible with <br />
                cutting-edge technology and seamless design. They offer a quantum <br />
                leap in computing, delivering power and elegance in one. Meticulously crafted to inspire creativity and productivity.
              </div>

              <div className='flex gap-5 items-center'>
                <div className='grid grid-cols-3 w-40 mt-5 font-bold py-2 px-2 text-xl'>
                    <div className='px-3 items-center justify-center py-3 border border-white text-white hover:bg-gray-800'><FiMinus /></div>
                    <div className='px-4 items-center py-2 border border-white text-black bg-white'>1</div>
                    <div className='px-3 items-center py-3 border border-white text-white hover:bg-gray-800'><FiPlus /></div>
                </div>

                <div className=" mt-5">
                  <Button text={"ADD TO CART"} />
                </div>
              </div>

              <div className="border border-gray-900 mt-10"></div>

              <div className="mt-5 text-gray-400">Category : <span className='text-[#ff4955]'>{item.category}</span></div>

              <div className="font-semibold text-gray-300 text-lg mt-4">Free shipping on orders over $50!</div>

              <div className="flex items-center gap-3 mt-5 text-gray-400">
                <div className="text-[#ff4955]"><FaCheckCircle /></div>
                <div className="">No-Risk Money Back Guarantee!</div>
              </div>

              <div className="flex items-center gap-3 mt-3 text-gray-400">
                <div className="text-[#ff4955]"><FaCheckCircle /></div>
                <div className="">No Hassle Refunds</div>
              </div>

              <div className="flex items-center gap-3 mt-3 text-gray-400">
                <div className="text-[#ff4955]"><FaCheckCircle /></div>
                <div className="">Secure Payments</div>
              </div>
          </div>
        </div>

        <div className="w-280 m-auto border border-gray-800 rounded overflow-hidden">
          <button className='w-full flex justify-between items-center p-5 bg-gray-900/50 font-Kaushan text-xl hover:bg-gray-900 transition'>
          Description
          <FaPlus />
          </button>
        </div>

        <div className="w-280 mt-5 m-auto border border-gray-800 rounded overflow-hidden">
          <button className='w-full flex justify-between items-center p-5 bg-gray-900/50 font-Kaushan text-xl hover:bg-gray-900 transition'>
          Reviews (0)
          <FaPlus />
          </button>
        </div>

        <div className="gothic mt-20 px-20 text-4xl md:text-7xl text-white uppercase mb-10">Related products</div>

        <div className="mt-20 grid grid-cols-4 gap-7 px-20 pb-60">
            {Data.slice(0, 6).map((item) => {
              return (
                <Products item={item} />
              )
            })}
        </div>

      </div>
    </>
  )
}

export default Detail