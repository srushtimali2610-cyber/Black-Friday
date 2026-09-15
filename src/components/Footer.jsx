import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

const Footer = () => {
    return (
        <>
            <div className="bg-black mt-[-100px] pb-10">
                <div className="border-b border-gray-800"></div>
                <div className="grid grid-cols-4 px-20 gap-10 mt-20">
                    <div className=" h-60 ">
                        <img src="https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/logo-me.svg" alt="" />
                        <div className="text-gray-400 leading-relaxed mt-3">
                            Elevate your lifestyle with our curated collection of premium products. From cutting-edge electronics to timeless fashion, <br /> we bring you the best deals for your daily needs.
                        </div>
                        <div className="grid grid-cols-5 mt-5">
                            <div className=" w-10 h-10 border rounded-full border-gray-700 py-3 px-3">
                                <FaFacebookF className='text-md text-white' />
                            </div>
                            <div className=" w-10 h-10 border rounded-full border-gray-700 py-3 px-3">
                                <FaInstagram className='text-md text-white' />
                            </div>
                            <div className=" w-10 h-10 border rounded-full border-gray-700 py-3 px-3">
                                <FaTwitter className='text-md text-white' />
                            </div>
                            <div className=" w-10 h-10 border rounded-full border-gray-700 py-3 px-3">
                                <FaLinkedinIn className='text-md text-white' />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-xl  text-white font-bold uppercase gothic tracking-wider mb-8 border-b-2 border-[#ff4955] w-fit pb-1">
                            Quick Links
                        </div>
                        <ul className='space-y-2'>
                            <li className="text-gray-400 hover:text-[#ff4955] hover:border-b-2 pb-2 cursor-pointer w-fit">
                                <Link to="/">HOME</Link>
                            </li>
                            <li className="text-gray-400 hover:text-[#ff4955] hover:border-b-2 pb-2 cursor-pointer w-fit">
                                <Link to="/">SHOP</Link>
                            </li>
                            <li className="text-gray-400 hover:text-[#ff4955] hover:border-b-2 pb-2 cursor-pointer w-fit">
                                <Link to="/">ABOUT US</Link>
                            </li>
                            <li className="text-gray-400 hover:text-[#ff4955] hover:border-b-2 pb-2 cursor-pointer w-fit">
                                <Link to="/">CONTACT US</Link>
                            </li>
                            <li className="text-gray-400 hover:text-[#ff4955] hover:border-b-2 pb-2 cursor-pointer w-fit">
                                <Link to="/">MY CART</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <div className="text-xl  text-white font-bold uppercase gothic tracking-wider mb-8 border-b-2 border-[#ff4955] w-fit pb-1">
                            Contact Us
                        </div>
                        <div className="flex gap-3 text-gray-400 items-center">
                            <FaLocationDot className='text-2xl text-[#ff4955]' />
                            <div className='hover:border-[#ff4955] hover:border-b-2 pb-2 cursor-pointer w-fit'>
                                2972 Westheimer Rd. <br />
                                Santa Ana, Illinois 85486
                            </div>
                        </div>
                        <div className="flex gap-3 text-gray-400 items-center">
                            <BsTelephoneFill className='text-2xl text-[#ff4955]'/>
                            <div className="hover:border-[#ff4955] hover:border-b-2 pb-2 cursor-pointer w-fit">(405) 555-0128</div>
                        </div>
                         <div className="flex gap-3 text-gray-400 items-center">
                            <IoMdMail className='text-2xl text-[#ff4955]'/>
                            <div className="hover:border-[#ff4955] hover:border-b-2 pb-2 cursor-pointer w-fit">hello@example.com</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-xl  text-white font-bold uppercase gothic tracking-wider mb-8 border-b-2 border-[#ff4955] w-fit pb-1">
                        Newsletter
                        </div>
                        <div className="text-gray-400 leading-relaxed mt-3">
                           Subscribe to get the latest <br />
                            update on sales and exclusive offers.
                        </div>
                        <input type="email" placeholder='Your Email Address' className='w-55 px-10 py-3 text-gray-400 border border-gray-800 hover:border-[#ff4955] bg-gray-900 mt-5 rounded-sm' />
                        <div className='mt-5'>
                            <Button text={"SUBSCRIBE"} wid={"w-55"} />
                        </div> 
                    </div>
                </div>
                <div className="border-b mt-15 border-gray-800 w-270 ml-20"></div>
                <div className='flex gap-110 text-gray-600 text-sm mt-10 px-20'>
                    <div>© 2024 Black Friday Store. All Rights Reserved.</div>
                    <div className='flex gap-10'>
                        <div>Privacy Policy</div>
                        <div>Terms of Service</div>
                        <div>Cookie Policy</div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Footer