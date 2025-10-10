import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLatterBox from '../components/NewsLetterBox';

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-300'>
        <Title text1={'CONTACT'} text2={' US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
        <img className='w-full sm:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-[#2F2F2F]'>Our Store</p>
          <p className='text-gray-600'>54709 Okhla <br />New Delhi, India</p>
          <p className='text-gray-600'>(+91) 9508650731 <br /> Email: mdsanaullah1227@gmail.com</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <NewsLatterBox />
    </div>
  )
}

export default Contact
