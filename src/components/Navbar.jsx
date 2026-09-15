import React from 'react'
import { PiHandbagSimpleFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='fixed w-full z-99 bg-[#090909]'>
            <nav className='w-full h-20 p-5 flex gap-50 text-center items-center'>
                <img src="https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/logo-me.svg" alt="" className='px-15'/>
                <div className='flex gap-10 text-white font-semibold'>
                    <Link to='/' className='hover:text-[#FF4955] hover:border-b-2 pb-2 '>
                         HOME
                    </Link>
                    <Link to='/shop' className='hover:text-[#FF4955] hover:border-b-2 pb-2'>
                        SHOP
                    </Link>
                    <Link to='/about' className='hover:text-[#FF4955] hover:border-b-2 pb-2'>
                        ABOUT
                    </Link>
                    <Link className='hover:text-[#FF4955] hover:border-b-2 pb-2'>
                        CONTECT
                    </Link>
                </div>
                <div className='text-[#FB2C36] text-3xl px-40'>
                    <PiHandbagSimpleFill />
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar