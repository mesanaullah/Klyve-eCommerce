import React, { useState, useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { GoSearch } from "react-icons/go";
import { HiOutlineShoppingBag, HiOutlineUserCircle, HiOutlineBars4 } from "react-icons/hi2";
import { MdArrowRight } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {

    const [Visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
    const [showProfile, setShowProfile] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);


    const isMobile = window.innerWidth < 640; // sm breakpoint


    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    }

    useEffect(() => {
        document.body.style.overflow = Visible ? 'hidden' : 'auto';
    }, [Visible]);

    useEffect(() => {
        if (Visible) setShowProfile(false);
    }, [Visible]);

    useEffect(() => {
        if (!Visible) setProfileOpen(false);
    }, [Visible]);



    return (
        <div className='relative flex items-center justify-between py-5 font-medium border-b border-gray-300'>

            {/* Menu icon for mobile */}
            <div className='flex items-center gap-4 sm:hidden'>
                <HiOutlineBars4 onClick={() => setVisible(true)} className='w-6 h-6 cursor-pointer' />

                {/* Search icon */}
                <GoSearch onClick={() => { setShowSearch(true); navigate('/collection') }} className="w-6 h-6 cursor-pointer" />

            </div>

            {/* Categories */}
            <ul className='hidden sm:flex gap-4 text-sm text-[#2F2F2F]'>

                {/* <NavLink to='/' className='felx felx-col items-center gap-1' >
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-[#2F2F2F] hidden' />
                </NavLink> */}

                <NavLink to='/men' className='felx felx-col items-center gap-1' >
                    <p>MEN</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-[#2F2F2F] hidden' />
                </NavLink>

                <NavLink to='/women' className='felx felx-col items-center gap-1' >
                    <p>WOMEN</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-[#2F2F2F] hidden' />
                </NavLink>

                <NavLink to='/collection' className='felx felx-col items-center gap-1' >
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-[#2F2F2F] hidden' />
                </NavLink>

                {/* <NavLink to='/about' className='felx felx-col items-center gap-1' >
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-[#2F2F2F] hidden' />
                </NavLink> */}

                {/* <NavLink to='/contact' className='felx felx-col items-center gap-1' >
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-[#2F2F2F] hidden' />
                </NavLink> */}

            </ul>
            {/* LOGO */}

            <div className=' flex items-center justify-center'>
                <Link to='/'>
                    <img src={assets.logo_2} className='w-28 ' alt="" />
                    {/* <p className='raleway-logo text-3xl tracking-wider font-medium text-[#2F2F2F]'>KLYVE</p> */}
                </Link>
            </div>

            <div className='flex items-center justify-between '>

                <div className='flex gap-4 sm:gap-6'>
                    {/* Search icon */}
                    <GoSearch onClick={() => { setShowSearch(true); navigate('/collection') }} className="w-6 h-6 cursor-pointer hidden sm:block" />

                    {/* Wishlist */}
                    <Link to='/wishlist'>
                        <GoHeart className='w-6 h-6 cursor-pointer hidden sm:block' />
                    </Link>

                    {/* user profile */}
                    <div className='group relative'>
                        {/* profile */}
                        {/* <Link onClick={() => token ? null : navigate('/login')} ><SlUser className="w-6 h-6 cursor-pointer" /></Link> */}
                        <HiOutlineUserCircle
                            onClick={() => {
                                if (!token) {
                                    // always redirect if not logged in
                                    navigate('/login');
                                    return;
                                }

                                if (isMobile) {
                                    // mobile users go to profile page
                                    navigate('/profile');
                                } else {
                                    // desktop → toggle dropdown
                                    setShowProfile(prev => !prev);
                                }
                            }}
                            className="w-6 h-6 cursor-pointer"
                        />

                        {/* dropdown menu */}

                        {token && (
                            <div className="absolute right-0 mt-4 hidden sm:block z-40">
                                <div
                                    className="
                                            absolute right-0 top-full pt-2
                                            opacity-0 invisible pointer-events-none translate-y-2
                                            group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0
                                            transition-all duration-200 ease-out
                                            bg-white rounded-lg shadow-2xl border border-gray-100
                                            min-w-[200px]
                                            "
                                >
                                    {/* caret / arrow */}
                                    <div className="absolute -top-2 right-6 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100" />

                                    <ul className="py-2 text-sm text-gray-600">
                                        <li
                                            onClick={() => navigate('/profile')}
                                            className="px-5 py-3 cursor-pointer hover:bg-gray-50 hover:text-black transition"
                                        >
                                            My Profile
                                        </li>

                                        <li
                                            onClick={() => navigate('/orders')}
                                            className="px-5 py-3 cursor-pointer hover:bg-gray-50 hover:text-black transition"
                                        >
                                            Orders
                                        </li>

                                        <li className="border-t border-gray-100 my-1" />

                                        <li
                                            onClick={logout}
                                            className="px-5 py-3 cursor-pointer text-red-500 hover:bg-red-50 transition"
                                        >
                                            LogOut
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}



                    </div>

                    {/* Catr */}
                    <Link to='/cart' className='relative'>
                        <HiOutlineShoppingBag className="w-6 h-6 cursor-pointer" />
                        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#2F2F2F] text-white aspect-square rounded-full text-[8px] '>{getCartCount()}</p>
                    </Link>
                </div>
            </div>


            {/* side bar menu for small screen */}

            <div className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${Visible ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex flex-col text-[#2F2F2F] text-sm'>
                    <div onClick={() => setVisible(false)} className='flex items-center p-4'>
                        <MdArrowRight className='cursor-pointer align-middle w-8 h-8 rotate-180' />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200' to='/men'>MEN</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200' to='/women'>WOMEN</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200' to='/collection'>COLLECTION</NavLink>
                    {/* <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200' to='/wishlist'>WISHLIST</NavLink> */}
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200' to='/cart'>CART</NavLink>


                    {token && (
                        <div className="border-b border-gray-200">

                            {/* PROFILE HEADER */}
                            <button
                                onClick={() => setProfileOpen(prev => !prev)}
                                className="w-full flex items-center justify-between px-6 py-4 font-medium"
                            >
                                <span>PROFILE</span>
                                <span
                                    className={`transform transition-transform duration-300 ${profileOpen ? 'rotate-180' : ''
                                        }`}
                                >
                                    ▲
                                </span>
                            </button>

                            {/* PROFILE DROPDOWN */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${profileOpen ? 'max-h-40' : 'max-h-0'
                                    }`}
                            >
                                <NavLink
                                    to="/orders"
                                    onClick={() => setVisible(false)}
                                    className="block px-8 py-4 border border-gray-200 text-sm"
                                >
                                    Orders
                                </NavLink>

                                <button
                                    onClick={() => {
                                        setVisible(false);
                                        logout();
                                    }}
                                    className="w-full text-left px-8 py-4 text-sm"
                                >
                                    Logout
                                </button>
                            </div>

                        </div>
                    )}

                    {/* <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/women'>Women</NavLink> */}
                    {/* <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink> */}
                    {/* <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
