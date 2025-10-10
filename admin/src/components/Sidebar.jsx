import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";




const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-screen border-r-1 border-gray-300'>
            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
                <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2  rounded-l-sm' to='/add' >
                    {/* <img className='w-5 h-5' src="" alt="" /> */}
                    <IoIosAddCircleOutline className='w-6 h-6' />
                    <p className='hidden md:block text-base'>Add Items</p>
                </NavLink>

                <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2  rounded-l-sm' to='/list' >
                    {/* <img className='w-5 h-5' src="" alt="" /> */}
                    <CiBoxList className='w-6 h-6' />
                    <p className='hidden md:block text-base'>List Items</p>
                </NavLink>

                <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2  rounded-l-sm' to='/orders' >
                    {/* <img className='w-5 h-5' src="" alt="" /> */}
                    <HiOutlineShoppingBag className='w-6 h-6' />
                    <p className='hidden md:block text-base'>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
