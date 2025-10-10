import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { BsSliders } from "react-icons/bs";



const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  // useEffect(() => {
  //   setFilterProducts(products);
  // }, [])

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, showSearch, search, products])

  useEffect(() => {
    sortProduct();
  }, [sortType])




  // useEffect(() => {
  //   console.log(subCategory);
  // }, [subCategory])
  // console.log(filterProducts);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300 '>

      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-md sm:text-xl flex items-center cursor-pointer gap-2 text-[#2F2F2F]'>FILTER
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden  ${showFilter ? 'rotate-90' : ''}`} alt="" />
          <BsSliders className='h-5 w-5 hidden md:block' />
        </p>


        {/* Categories */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block `}>
          <p className='mb-3 text-sm font-medium '>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-[#2F2F2F]'>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
            </p>
          </div>
        </div>

        {/* SubCatogories */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block `}>
          <p className='mb-3 text-sm font-medium '>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-[#2F2F2F]'>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Shirts'} onChange={toggleSubCategory} />Shirts
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'T-Shirts'} onChange={toggleSubCategory} />T-Shirts
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Polo-Shirts'} onChange={toggleSubCategory} />Polo-Shirts
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Trousers'} onChange={toggleSubCategory} />Trousers
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Jeans'} onChange={toggleSubCategory} />Jeans
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Oversized'} onChange={toggleSubCategory} />Oversized
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Cargo Pants'} onChange={toggleSubCategory} />Cargo Pants
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Joggers'} onChange={toggleSubCategory} />Joggers
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Shorts'} onChange={toggleSubCategory} />Shorts
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Sweaters'} onChange={toggleSubCategory} />Sweaters
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Hoodies'} onChange={toggleSubCategory} />Hoodies
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Sweatshirts'} onChange={toggleSubCategory} />Sweatshirts
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Jackets'} onChange={toggleSubCategory} />Jackets
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Shackets'} onChange={toggleSubCategory} />Shackets
            </p>

            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Co-Ords'} onChange={toggleSubCategory} />Co-Ords
            </p>
          </div>
        </div>

      </div>

      {/* Right Side */}

      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Products Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-1 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low-High</option>
            <option value="high-low">Sort by: High-Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 '>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Collection
