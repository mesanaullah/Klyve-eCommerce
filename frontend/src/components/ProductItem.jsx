import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import { Link } from 'react-router-dom';
import { IoIosHeartEmpty } from "react-icons/io";



const ProductItem = ({ id, image, price, name }) => {
    const { currency, addToWishlist, removeFromWishlist, isInWishlist } = useContext(ShopContext);
    const isWishlisted = isInWishlist(id);

    const handleWishlistToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (isWishlisted) {
            removeFromWishlist(id);
        } else {
            addToWishlist({ id, image, price, name });
        }
    };

    return (
        <div className="relative group">
            <Link to={`/product/${id}`} className='cursor-pointer text-[#2F2F2F]' >
                <div className='overflow-hiddden'>
                    <img src={image[0]} className='hover:scale-110 transition ease-in-out' alt="" />
                </div>
                <p className='text-sm pt-3 pb-1'>{name}</p>
                <p className='text-sm font-medium'>{currency} {price}</p>
            </Link>

            {/* Wishlist button */}
            <button
                onClick={handleWishlistToggle}
                className="absolute top-1 right-1 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none"
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
                <IoIosHeartEmpty className={`h-6 w-6  ${isWishlisted ? 'text-[#E0115F]' : 'text-gray-600'}`} />
            </button>
        </div>
    );
};

export default ProductItem;