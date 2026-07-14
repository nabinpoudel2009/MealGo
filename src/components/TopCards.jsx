import React from 'react'
import TopRestaurant from './TopRestaurant';
import { FaStar } from "react-icons/fa6";

const TopCards = (props) => {

    return (
        <div className='w-60 group md:w-85 shrink-0 grow mt-5'>
            <div className='h-30 max-h-50 md:h-50 rounded-lg overflow-hidden relative flex'>
                <img 
                    src={props.image} alt={props.name}
                    className='object-cover group-hover:scale-102 duration-200 w-full h-full'
                />
                <div className='flex top-0 h-full w-full bg-linear-to-b duration-300 ease-in-out transition-all105 hover:opacity-70 to-110% z-100 from-black/0 to-black absolute items-end px-2 text-white py-1 tracking-tight text-lg sm:text-xl font-bold'>
                    <h3>{props.offer}</h3>
                </div>
            </div>
            <div className='p-2 flex text-black flex-col gap-x-1 gap-y-0.5'>
                <h3 className='text-black text-bold text-sm sm:text-base md:text-lg font-bold'>{props.title}</h3>
                <div className='flex font-semibold items-center gap-1 text-xs sm:text-base'>
                    <div className='flex items-center justify-center bg-orange-500 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5'>
                        <FaStar className='text-xs sm:text-sm' />
                    </div>
                    <h6>{props.rating}</h6>
                    <h6 className='ml-1 sm:ml-2'>{props.minTime} - {props.maxTime} min</h6>
                </div>
                <h5 className="text-xs sm:text-sm font-light">{props.name}</h5>
                <h5 className="text-xs sm:text-sm font-light">{props.place}</h5>
            </div>
        </div>
    )
}

export default TopCards