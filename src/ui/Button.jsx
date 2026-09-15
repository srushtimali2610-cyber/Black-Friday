import React from 'react'

const Button = ({text, wid="w-fit"}) => {
  return (
    <>
        <button className={`uppercase bg-[#FF4955] gothic py-3 px-10  text-white tracking-wide text-2xl cursor-pointer hover:bg-[#e63e48] ${wid}`}>
            {text}
        </button>
    </>
  )
}

export default Button