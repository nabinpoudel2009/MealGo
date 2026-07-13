import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const Search = () => {

    const [searchInput, setSearchInput] = useState("");

    const stopReload = (e) => {
        e.preventDefault();
    }

    return (
        <div className='hidden lg:block'>
            <form 
                className='flex items-center gap-x-2'
                onSubmit={stopReload}
            >
                <input 
                    type="text"
                    className='bg-neutral-50 shadow-sm border text-neutral-900 border-black/20 rounded-full outline-none pl-3 py-1' 
                    placeholder='Search'
                    title={searchInput}
                    required
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                />
                <button 
                    className='rounded-full bg-neutral-50 border border-black/10 p-2 shadow-md active:scale-90'
                >
                    <FaSearch />
                </button>
            </form>
        </div>
    )
}

export default Search