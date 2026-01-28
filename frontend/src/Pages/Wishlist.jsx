import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import { Link } from 'react-router-dom';
import { IoIosHeartEmpty } from "react-icons/io";


const Wishlist = () => {

    const { wishlist, removeFromWishlist, currency } = useContext(ShopContext);

    if (wishlist.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
               
                <h2 className="text-2xl font-bold text-[#2F2F2F] mb-2">Your wishlist is empty</h2>
                <p className="text-gray-600 mb-6">Save your favorite items here for later</p>
                <Link
                    to="/"
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-md font-medium mb-8">My Wishlist ({wishlist.length} items)</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                {wishlist.map((product) => (
                    <div key={product.id} className="border-1 border-gray-300 rounded-sm overflow-hidden relative">
                        <Link to={`/product/${product.id}`} className="block">
                            <img
                                src={product.image[0]}
                                alt={product.name}
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </Link>

                        <div className="p-4">
                            <Link to={`/product/${product.id}`}>
                                <h3 className="text-sm pt-3 pb-1">{product.name}</h3>
                            </Link>
                            <p className="text-sm font-medium">{currency} {product.price}</p>
                        </div>

                        <button
                            onClick={() => removeFromWishlist(product.id)}
                            className="absolute top-1 right-1 p-1"
                            aria-label="Remove from wishlist"
                        >
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-red-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clipRule="evenodd"
                                />
                            </svg> */}
                            <IoIosHeartEmpty className='h-6 w-6 text-red-500' />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Wishlist
