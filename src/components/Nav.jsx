import React, { useState } from 'react';
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { BsCartDash } from "react-icons/bs";
import { PiCaretDownBold } from "react-icons/pi";
import { FiHelpCircle } from "react-icons/fi";
import Search from './Search';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const NavLinks = [
    {
        title: "Offer",
        href: "Offers",
        icon: <RiDiscountPercentLine />,
        sup: "new"
    },
    {
        title: "Help",
        href: "help",
        icon: <FiHelpCircle />
    },
    {
        title: "Sign In",
        href: "SignIn",
        icon: <FaRegUser />
    },
    {
        title: "Cart",
        icon: <BsCartDash />,
        sup: "0"
    }
]

const Nav = () => {

    const [toggle, setToggle] = useState(false)

    const showToggle = () => {
        setToggle(true)
    }
    const hideToggle = () => {
        setToggle(false)
    }

    return (
        <>
            <div 
                className='h-full z-900 w-full bg-black/60 fixed duration-300'
                onClick={hideToggle}
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? "visible" : "hidden"
                }}
            >
                <div 
                    className='bg-white z-90 h-full w-3/4 sm:w-[30vw] md:w-[40vw] absolute duration-600'
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    style={{
                        left: toggle ? '0%' : '-100%'
                    }}
                >
                
                </div>
            </div>
            <nav className='w-full shadow-lg z-500 p-2 sm:p-3 sticky top-0 bg-white'>
                <div className='max-w-7xl mx-auto py-2'>
                    <div className='flex items-center justify-center gap-x-3 sm:gap-x-10 w-full'>
                        <h3 className='text-[1.3rem] sm:text-3xl unbounded no-select'>
                            <span className='text-orange-500 font-semibold'>M</span>eal<span className='text-orange-500 font-semibold'>G</span>o
                        </h3>
                        <h3 className='cursor-pointer flex items-center gap-x-1 text-xs sm:text-sm md:text-base'>
                            <span className='font-semibold text-xs border-b border-orange-500'>Narayangadh, </span>
                            Nepal
                            <PiCaretDownBold 
                                className='text-xl transition-colors hover:fill-orange-500'
                                onClick={showToggle}
                            />
                        </h3>
                        <div className='flex items-center gap-x-3 sm:gap-x-5 ml-auto'>
                            <Search />
                            <ul className='hidden lg:flex items-center gap-x-3 sm:gap-x-5'>
                                {NavLinks.map((link, index) => (
                                    <li 
                                        key={index}
                                        className='flex transition-all duration-200 ease-in-out hover:text-orange-500 font-semibold cursor-pointer items-center text-base gap-x-1'
                                    >
                                        {link.icon}
                                        <span>{link.title}</span>
                                        {link.sup && (
                                            <sup>
                                                <span className='text-[10px] uppercase text-orange-500 rounded-full'>{link.sup}</span>
                                            </sup>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button 
                            className='lg:hidden text-xl items-center'
                            onClick={() => setToggle((prev) => !prev)}
                        >
                            {!setToggle ? (
                                <IoClose className='text-3xl'/>
                            ) : (
                                <GiHamburgerMenu className='text-2xl' />
                            )
                            }
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav

// onClick={() => showToggle((prev) => !prev)}