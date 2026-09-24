import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import Button from '../ui/Button'

const Contact = () => {
  return (
    <>
      <div>
        <div className="bg-[url(https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop)] bg-cover bg-center bg-fixed bg-gray-950">
          <div className="bg-gradient-to-b from-black/90 via-black/40 to-black/90 min-h-screen ">
            <div className="text-center font-semibold text-xl md:text-2xl font-Kaushan pt-45">
              Let's Talk
            </div>
            <div className="text-center font-extralight text-white gothic text-6xl md:text-8xl mt-2 uppercase">
              Contact Us
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-[87%] m-auto mt-30">
              <div className="">
                <div className="font-extralight text-white gothic text-5xl md:text-7xl leading-tight mt-2 uppercase">
                  Get in touch
                </div>
                <div className="text-gray-400 mt-6 text-lg ">
                  Have questions or need assistance? Our friendly and responsive customer support team is here to help you with anything you need.
                </div>
                <div className="flex gap-5 mt-10">
                  <div className="text-[#FF4955] text-2xl pt-1"><FaLocationDot /></div>
                  <div className="grid grid-rows-2">
                    <div className="font-extralight text-white gothic text-2xl leading-tight uppercase">
                     Address
                    </div>
                    <div className="text-white mt-2 text-sm md:text-lg">
                      2972 Westheimer Rd. Santa Ana, Illinois 85486
                    </div>
                  </div>
                </div>
                <hr className='border-gray-800 mt-7' />

                <div className="flex gap-5 mt-10">
                  <div className="text-[#FF4955] text-2xl pt-1"><FaPhoneAlt /></div>
                  <div className="grid grid-rows-2">
                    <div className="font-extralight text-white gothic text-2xl leading-tight uppercase">
                     Phone
                    </div>
                    <div className="text-white mt-2 text-lg">
                     (405) 555-0128
                    </div>
                  </div>
                </div>
                <hr className='border-gray-800 mt-7' />

                <div className="flex gap-5 mt-10">
                  <div className="text-[#FF4955] text-2xl pt-1"><MdEmail /></div>
                  <div className="grid grid-rows-2">
                    <div className="font-extralight text-white gothic text-2xl leading-tight uppercase">
                     Email
                    </div>
                    <div className="text-white mt-2 text-lg">
                      hello@example.com
                    </div>
                  </div>
                </div>
                
              </div>

              <div className=" bg-gray-950/40 p-8 md:p-12 rounded-xl border border-gray-800 shadow-xl font-Kaushan">
                <div className="space-y-6">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="" className='text-gray-300 text-lg'>First Name *</label>
                      <input type="text" className='w-full bg-white text-black h-12 px-4 rounded focus:ring-2 focus:ring-[#ff4955] outline-none'/>
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="" className='text-gray-300 text-lg'>Last Name *</label>
                      <input type="text" className='w-full bg-white text-black h-12 px-4 rounded focus:ring-2 focus:ring-[#ff4955] outline-none'/>
                    </div>
                  </div>

                  <div className="space-y-3">
                     <label htmlFor="" className='text-gray-300 text-lg'>Email *</label>
                      <input type="text" className='w-full bg-white text-black h-12 px-4 rounded focus:ring-2 focus:ring-[#ff4955] outline-none'/>
                  </div>  

                  <div className="space-y-3">
                     <label htmlFor="" className='text-gray-300 text-lg'>Email *</label>
                      <textarea name="" id="" className='w-full bg-white text-black h-40 px-4 py-3 rounded focus:ring-2 focus:ring-[#ff4955] outline-none resize-none'></textarea>
                  </div>                  

                  <Button text={"Send Message"} />
                </div>
              </div>
            </div> 

            <div className='bg-[url(https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop)] bg-cover bg-center bg-fixed bg-gray-950 mt-30'>
            <div className="bg-gradient-to-b from-black/50 via-black/40 to-black/90 w-full py-20 px-4 md:px-20 text-center ">
              <div className="font-Kaushan text-2xl md:text-3xl font-semibold pt-10">
                Black Friday Sale
              </div>
              <div className="gothic text-4xl md:text-7xl mt-10 text-white uppercase leading-tight">
                Save Big: Up to <span className='text-[#FF4955]'>60% Off </span> on All Products
              </div>
              <div className="mt-8 text-lg text-gray-300">
                    Don’t miss this exclusive opportunity to embark on a journey of unbeatable savings <br />
                    and cutting-edge technology. It’s time to secure the best deals and upgrade your <br />
                    experience.
              </div>
              <div className='mt-10'>
                <Button text={"SHOP DEALS"} />
              </div>
              <div className="border-b border-gray-800 mt-20 mx-20 "></div>

            </div>
          </div>
             
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact