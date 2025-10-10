import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import RelatedProduct from '../components/RelatedProduct'


const Product = () => {

  const { productId } = useParams()
  // console.log(productId);
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        // console.log(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])


  return productData ? (
    <div className='border-t-1 border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/* ---------------Product Data-------------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* ------------product Image------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>

        </div>

        {/* ---------------Product Info--------------*/}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2 text-[#2F2F2F]'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_dull_icon} className='w-3 5' alt="" />
            <p className='pl-2 text-[#2F2F2F]'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium text-[#2F2F2F]'>{currency}{productData.price}</p>
          <p className='mt-5  text-gray-600 md:w-4/5 '>{productData.description}</p>

          <div className='flex flex-col my-8 gap-4'>
            <p className='text-[#2F2F2F]'>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} className={`border border-gray-400 py-2 px-4  ${item === size ? 'border bg-black text-white' : ''}`} key={index} > {item}</button>
                ))
              }
            </div>
          </div>

          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-[#2F2F2F]'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 text-gray-300 ' />
          <div className='flex flex-col text-sm text-gray-600 gap-1 mt-5'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* -----------------Descriptio and Review------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-gray-300 py-3 px-5 text-sm'>Description</b>
          <p className='border border-gray-300 px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
        <div className='flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-600'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>

      {/* -----------Related Products----------------- */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
    </div >
  ) : <div className='opacity-0'></div>
}

export default Product
