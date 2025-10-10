import React from 'react'
import { assets } from '../assets/assets'
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { FcCustomerSupport } from "react-icons/fc";
import { RiCustomerService2Fill } from "react-icons/ri";


const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-[#2F2F2F]'>
            <div>
                <RiExchangeFundsLine className='w-12 h-12 m-auto mb-5' />
                {/* <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" /> */}
                <p className='font-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-500'>We offer hassle free exchange policy</p>
            </div>

            <div>
                <TbTruckReturn className='w-12 h-12 m-auto mb-5' />
                <p className='font-semibold'>7 Days Return Policy</p>
                <p className='text-gray-500'>We provide 7 days free return policy</p>
            </div>

            <div>
                <RiCustomerService2Fill className='w-12 h-12 m-auto mb-5' />
                <p className='font-semibold'>Best customer support</p>
                <p className='text-gray-500'>we provide 24/7 customer support</p>
            </div>
        </div>
    )
}

export default OurPolicy
