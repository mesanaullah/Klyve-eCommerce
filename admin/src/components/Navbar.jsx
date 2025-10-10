import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
    return (
        <div className='flex items-center justify-between py-2 px-[4%]'>
            {/* <img className='w-[max(10%,80px)]' src={assets.logo} alt="" /> */}
            <div className='py-1'>
                <p className='raleway-logo text-3xl tracking-wider font-medium text-[#2F2F2F]'>KLYVE</p>
                <p className='text-xs text-gray-600'>ADMIN PANEL</p>
            </div>
            <button onClick={() => setToken('')} className='bg-black active:bg-gray-800 text-white px-5 py-2 sm:px-7 sm:py-2  rounded-full text-xs sm:text-sm'>Logout</button>
        </div>
    )
}

export default Navbar
