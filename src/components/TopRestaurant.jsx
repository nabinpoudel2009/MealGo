import React, { useContext, useEffect, useState } from 'react'
import Category from './Category';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { SlSocialLinkedin } from 'react-icons/sl';
import TopCards from './TopCards';
import { LocationContext } from "../context/LocationContext";

const TopRestaurant = () => {

    const [data, setData] = useState([])

    const fetchTopRest = async () => {
        const response = await fetch('./restaurantChain.json');
        const apiData =  await response.json();
        setData(apiData);
    }
    
    useEffect (
        () => {
            fetchTopRest();
        }
    ), [];
    const { selectedLocation } = useContext(LocationContext);

    return (
        <main className='max-w-7xl p-2 mx-auto'>
            <div>
                <div className='max-w-7xl mx-auto flex gap-3 items-center justify-between'>
                    <div>
                        <h3 className='font-bold text-lg md:text-2xl'>Top Restaurant Chains in <span className='text-orange-500'>{selectedLocation}</span></h3>
                    </div>
                </div>
                <div className='no-scrollBar scroll-smooth z-0 flex items-center shrink-0 grow gap-5 overflow-auto'>
                    {data.map((d, key) => 
                        <TopCards {...d} key={key}/>
                    )}
                </div>
            </div>
        </main>
    )
}

export default TopRestaurant