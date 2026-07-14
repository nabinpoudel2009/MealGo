import React, { useEffect, useState } from 'react'
import TopCards from './TopCards';

const OnlineDelv = () => {

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

    return (
        <section className='max-w-7xl mx-auto mt-5 px-2'>
            <div className='flex gap-3 items-center justify-between'>
                <div>
                    <h3 className='font-bold text-lg md:text-2xl'>Restaurant with online delivery in Nepal</h3>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4'>
                {data.map((d, key) => 
                    <div key={key} className='flex justify-center shrink-0 grow'>
                        <TopCards {...d}/>
                    </div>
                )}
            </div>
        </section>
    )
}

export default OnlineDelv