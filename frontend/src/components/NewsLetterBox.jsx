import React from 'react'

const NewsLetterBox = () => {

    const onSubmithandler = (event) => {
        event.preventDeault();
    }
    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-[#2F2F2F]'>Subscribe now & get 20% off</p>
            <p className='text-gray-500 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, non.</p>
           
            <form onSubmit={onSubmithandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-400 pl-3' >
                <input className='w-full sm:flex-1 outline-none ' type="email" placeholder="Enter your email" required />
                <button type='submit' className='bg-black active:bg-[#2F2F2F] text-white text-xs sm:text-sm px-10 py-3'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetterBox
