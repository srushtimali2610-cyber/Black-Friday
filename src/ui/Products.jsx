import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Products = ({item}) => {
    return (
        <>
            {/* dynemic routing: <Link to={`/details/${item.id}`}> */}
            <Link to={`/details/${item.id}`} className="group">
                <div className="h-80 w-full overflow-hidden">
                    <img src={item.image[0]} alt="" className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' />
                </div>
                <div className="text-white mt-3 gothic text-2xl tracking-wide uppercase">{item.title}</div>
                <Rating rating={item.rating} />
                <div className="text-[#6A7282] mt-3 text-xl font-semibold flex gap-3">
                    <del className='decoration-red-600'>${item.price} </del>
                    <div className="">${item.price - (item.price * item.offer) / 100}</div>
                </div>
            </Link>
        </>
    )
}

export default Products