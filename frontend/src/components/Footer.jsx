import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { PiInstagramLogoLight } from "react-icons/pi";


const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>

                {/* column 1 */}
                <div>
                    <img src={assets.logo_2} className='mb-5 w-32' alt="" />
                    {/* <p className='mb-5 raleway-logo text-4xl tracking-wider font-medium text-[#2F2F2F]'>KLYVE</p> */}

                    <p className='w-full sm:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eligendi excepturi, quisquam quam nobis tenetur laborum a dolores facere placeat sint commodi nemo deleniti, doloribus maiores nam nesciunt dicta perferendis! Possimus eveniet voluptas omnis quidem accusamus nostrum adipisci modi libero?</p>
                </div>

                {/* column 2 */}
                <div>
                    <p className='text-xl font-medium mb-5 text-[#2F2F2F]'>COMPNAY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        {/* <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li> */}
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About Us</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to=''>Delivery</Link>
                        <Link to=''>Privacy policy</Link>
                    </ul>
                </div>

                {/* column 3 */}
                <div>
                    <p className='text-xl font-medium text-[#2F2F2F] mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <p>+91 95086-50731</p>
                        <p>mdsnaullah1227@gmail.com</p>
                        <Link to='https://www.instagram.com/imsanaullahh/' className='flex items-center gap-1'><PiInstagramLogoLight className='w-4 h-4' />Instagram</Link>
                    </ul>
                </div>
            </div>

            {/* copy rights */}
            <div>
                <hr className='text-gray-400' />
                <p className='py-5 text-sm text-center text-[#2F2F2F]'>Copyright 2025@ KLYVE - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer

// 1:49:00