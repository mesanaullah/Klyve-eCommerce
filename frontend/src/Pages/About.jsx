import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-300'>
        <Title text1={'ABOUT'} text2={' US'} />
      </div>

      <div className='my-10 flex flex-col sm:flex-row gap-16'>
        <img className='w-full sm:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sequi error et doloremque? Tempora recusandae expedita, dolore facilis ducimus harum quibusdam nostrum, pariatur culpa vitae similique nemo quia eum fugit unde deserunt non. Commodi suscipit fugiat soluta sunt iure unde autem laborum, tempora dolores numquam dolorum, voluptate, obcaecati nobis quisquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quasi pariatur. Similique aliquid eaque temporibus deserunt culpa ea quae aliquam, odio suscipit eveniet asperiores, fuga nihil explicabo sunt animi aspernatur autem. Eaque officia, modi quisquam veritatis cumque eligendi asperiores placeat.</p>

          <b className='text-[#2F2F2F]'>Our Mission</b>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'} />
      </div>

      <div className='flex flex-col sm:flex-row mb-20 text-sm'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>

        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>

        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About
