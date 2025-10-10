import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { GoSearch } from "react-icons/go";
import { SlClose } from "react-icons/sl";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // console.log(location.pathname);
        if (location.pathname.includes('collection')) {
            setVisible(true);
        } else if (location.pathname.includes('men')) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }, [location])

    return showSearch && visible ? (
        <div className='border-t border-t-gray-300 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-500 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 '>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Serach' />
                {/* <img className='w-4' src={assets.search_icon} alt="" /> */}
                <GoSearch className="w-5 h-5 text-[#2F2F2F] cursor-pointer" />
            </div>

            <SlClose onClick={() => setShowSearch(false)} className='inline w-5 h-5 cursor-pointer text-[#2F2F2F]' />
        </div>
    ) : null;
}

export default SearchBar;
