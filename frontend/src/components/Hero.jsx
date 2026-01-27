import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import IMG from '../IMG/banner.jpg'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* Hero left side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#2F2F2F]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#2F2F2F]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base '>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[2px] bg-[#2F2F2F]'></p>
                    </div>
                </div>
            </div>

            {/* Hero Right side */}
            <NavLink to='' className='w-full sm:w-1/2 cursor-pointer'>
                {/* <img src={assets.hero_img} alt="" /> */}
                <img
                    className='w-full h-auto object-cover'
                    src='/src/IMG/banner.jpg' alt=""
                />
            </NavLink>
        </div>
    )
}

export default Hero
