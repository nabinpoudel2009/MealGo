import React from 'react'
import AppImg from '../assets/AppPortion.webp'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import Footer from './Footer';

const GetApp = () => {
    return (
        <section className='mt-5 bg-black sm:mt-7 md:mt-10'>
            <div className='max-w-7xl items-center justify-between mx-auto text-white flex py-10 w-full'>
                <div 
                    className='p-2'
                    id='left'
                >
                    <h3 className='text-[1.3rem] sm:text-3xl unbounded no-select'>
                        <span className='text-orange-500 font-semibold'>M</span>eal<span className='text-orange-500 font-semibold'>G</span>o
                    </h3>
                    <h2 className='text-lg sm:text-xl sm:font-bold md:text-3xl tracking-tighter'>Get the MealGo App now</h2>
                    <h4 className='text-neutral-400 text-xs sm:text-sm'>For Best offers and discounts created specially for you.</h4>
                    <div className="flex flex-col sm:flex-row mt-5 gap-4">
                        <a
                            href="#"
                            className="flex items-center border border-white/30 hover:border-white/50 justify-center gap-3 rounded-xl bg-black px-6 py-2 text-white transition"
                        >
                            <FaApple className="text-3xl" />
                            <div className="text-left">
                                <p className="text-xs text-gray-300">Download on the</p>
                                <p className="text-lg font-semibold">App Store</p>
                            </div>
                        </a>

                        <a
                            href="#"
                            className="flex items-center border border-white/30 hover:border-white/50 justify-center gap-3 rounded-xl bg-black px-6 py-2 text-white transition-all"
                        >
                            <FaGooglePlay className="text-3xl" />
                            <div className="text-left">
                                <p className="text-xs text-gray-300">Get it on</p>
                                <p className="text-lg font-semibold">Play Store</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div
                    className='hidden sm:block'
                    id='right'
                >
                    <img 
                        src={AppImg} 
                        alt="App Down Image"
                        className='w-45 md:w-52 lg:w-80' 
                    />
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default GetApp