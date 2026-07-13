import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { SlSocialLinkedin } from 'react-icons/sl';

const Category = () => {

    const [categories, setCategories] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchCategory = async () => {
        const response = await fetch('/product.json');
        const data = await response.json();
        setCategories(data);
    }

    useEffect (
        () => {
            fetchCategory();
        }, []
    )

    const nextSlide = () => {
        if (categories.length - 8 == slide | categories.length - 4 == slide) return false;
        setSlide(slide + 4);
    }

    const prevSlide = () => {
        if (slide <= 1) return false;
        setSlide(slide - 3);
    }

    return (
        <>
            <section className='max-w-7xl mx-auto mt-5 p-2'>
                <div className='max-w-7xl mx-auto flex items-center justify-between'>
                    <div>
                        <h3 className='font-bold text-2xl'>What's on your Mind?</h3>
                    </div>
                </div>
            </section>
            <div className='max-w-7xl mx-auto p-2'>
                <div className='flex scroll-smooth no-scrollBar overflow-hidden'>
                    {categories.map((categories, key) => 
                        <div 
                            className='flex duration-500 grow shrink-0 w-19 sm:w-30 md:w-40 no-select'
                            style={{
                                transform: `translateX(-${slide * 100}%)`,
                            }}
                            key={key}
                        >
                            <img src={`/${categories.image}`} alt="Foods" />
                        </div>
                    )}
                </div>
                <div className='flex gap-5 sm:gap-8 md:gap-10 justify-center mt-1'>
                    <div 
                        className='flex items-center justify-center bg-neutral-200 active:scale-90 text-xs sm:text-sm md:text-lg shadow-md rounded-full p-2'
                        onClick={prevSlide}
                    >
                        <FaArrowLeftLong />
                    </div>
                    <div 
                        className='flex items-center justify-center bg-neutral-200 active:scale-90 text-xs sm:text-sm md:text-lg rounded-full p-2'
                        onClick={nextSlide}
                    >
                        <FaArrowRightLong />
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 max-w-7xl mx-auto my-5' />
        </>
    )
}

export default Category