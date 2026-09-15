import React from 'react'
import { IoStarHalfSharp, IoStarOutline, IoStarSharp } from 'react-icons/io5';

const Rating = ({rating})=>{
    const totalStars = 5
    return(
        <div className="flex text-[#FF4955] text-[20px] mt-3">
            {[...Array(totalStars)].map((_,index)=> {
                const starNumber = index+1;
                 
                if (rating >= starNumber){
                    return <IoStarSharp key={index}/>;
                }
                if(rating >= starNumber - 0.5){
                    return <IoStarHalfSharp key={index}/>;
                }
                return <IoStarOutline key={index}/>;
            })}
        </div>
    );
};
    


export default Rating;