import React from 'react'
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='bg-orange-500 text-white p-2'>
            <div className='max-w-7xl mx-auto' >
                <div className='w-full'>
                    <p className='flex items-center gap-1 sm:text-sm text-xs tracking-tighter'>
                        <FaRegCopyright />
                        <span>2026 MealGo Limited</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer