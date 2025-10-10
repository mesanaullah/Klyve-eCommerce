import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import axios from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';


const Add = ({ token }) => {

    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('Men');
    const [subCategory, setSubCategory] = useState('Topwear');
    const [bestseller, setBestseller] = useState('Men');
    const [sizes, setSizes] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append("name", name)
            formData.append("description", description)
            formData.append("category", category)
            formData.append("subCategory", subCategory)
            formData.append("price", price)
            formData.append("bestseller", bestseller)
            formData.append("sizes", JSON.stringify(sizes))

            image1 && formData.append("image1", image1)
            image2 && formData.append("image2", image2)
            image3 && formData.append("image3", image3)
            image4 && formData.append("image4", image4)

            const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })

            // console.log(response.data)
            if (response.data.success) {
                toast.success(response.data.message)
                setName('')
                setDescription('')
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
                setPrice('')
            } else {
                toast.error(response.error.message)
            }


        } catch (error) {

            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
            <div>
                {/* ------------------------------Upload Image-------------------- */}
                <p className='text-[#2F2F2F] mb-2'>Upload Image</p>
                <div className='flex items-center gap-2'>
                    <label htmlFor="image1">

                        {
                            !image1 ? <div className='border border-gray-400 border-dashed rounded-sm px-4 py-2'>
                                <IoCloudUploadOutline className='h-8 w-8 text-gray-400' />
                                <p className='text-xs text-gray-400'>upload</p>
                            </div> : <img className='w-20 h-20 object-cover rounded' src={URL.createObjectURL(image1)} alt="" />
                        }

                        {/* <div className='border border-gray-400 border-dashed rounded-sm px-4 py-2'>
                            <IoCloudUploadOutline className='h-8 w-8 text-gray-400' />
                            <p className='text-xs text-gray-400'>upload</p>
                        </div> */}
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
                    </label>

                    <label htmlFor="image2">
                        {
                            !image2 ? <div className='border border-gray-400 border-dashed rounded-sm px-4 py-2'>
                                <IoCloudUploadOutline className='h-8 w-8 text-gray-400' />
                                <p className='text-xs text-gray-400'>upload</p>
                            </div> : <img className='w-20 h-20 object-cover rounded' src={URL.createObjectURL(image2)} alt="" />
                        }
                        <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
                    </label>

                    <label htmlFor="image3">
                        {
                            !image3 ? <div className='border border-gray-400 border-dashed rounded-sm px-4 py-2'>
                                <IoCloudUploadOutline className='h-8 w-8 text-gray-400' />
                                <p className='text-xs text-gray-400'>upload</p>
                            </div> : <img className='w-20 h-20 object-cover rounded' src={URL.createObjectURL(image3)} alt="" />
                        }
                        <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
                    </label>

                    <label htmlFor="image4">
                        {
                            !image4 ? <div className='border border-gray-400 border-dashed rounded-sm px-4 py-2'>
                                <IoCloudUploadOutline className='h-8 w-8 text-gray-400' />
                                <p className='text-xs text-gray-400'>upload</p>
                            </div> : <img className='w-20 h-20 object-cover rounded' src={URL.createObjectURL(image4)} alt="" />
                        }
                        <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
                    </label>
                </div>
            </div>

            {/* --------------------------------Product Name ----------------------------- */}
            <div className='w-full'>
                <p className='text-[#2F2F2F]'>Product name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] mt-2 border border-gray-300 outline-none px-3 py-2 rounded-sm' type="text" placeholder='Type here' required />
            </div>

            {/* -----------------------Product Description---------------------- */}
            <div className='w-full'>
                <p className='text-[#2F2F2F]'>Product description</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] mt-2 border border-gray-300 outline-none px-3 py-2 rounded-sm' type="text" placeholder='Write content here' />
            </div>

            {/*------------- categories---------- */}

            <div className='flex flex-col sm:flex-row w-full gap-2 sm:gap-8'>

                {/*------------- Product category---------- */}
                <div>
                    <p className='text-[#2F2F2F] mb-2'>Product category</p>
                    <select onChange={(e) => setCategory(e.target.value)} className='w-full border border-gray-300 rounded-sm outline-none px-3 py-2 text-gray-600'>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>

                {/*------------- Sub category---------- */}
                <div>
                    <p className='text-[#2F2F2F] mb-2'>Sub category</p>
                    <select onChange={(e) => setSubCategory(e.target.value)} className='w-full border border-gray-300 rounded-sm outline-none px-3 py-2 text-gray-600'>
                        <option value="Topwear">Topwear</option>
                        <option value="Bottomwear">Bottomwear</option>
                        <option value="Shirts">Shirts</option>
                        <option value="T-Shirts">T-Shirts</option>
                        <option value="Polo-Shirts">Polo-Shirts</option>
                        <option value="Trousers">Trousers</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Oversized">Oversized</option>
                        <option value="Cargo Pants">Cargo Pants</option>
                        <option value="Joggers">Joggers</option>
                        <option value="Sweaters">Sweaters</option>
                        <option value="Hoodies">Hoodies</option>
                        <option value="Sweatshirts">Sweatshirts</option>
                        <option value="Jackets">Jackets</option>
                        <option value="Shackets">Shackets</option>
                        <option value="Co-Ords">Co-Ords</option>
                    </select>
                </div>

                {/*------------- Product Price---------- */}
                <div className=''>
                    <p className='text-[#2F2F2F] mb-2'>Product Price</p>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full sm:w-[120px] border border-gray-300 rounded-sm outline-none px-3 py-2 text-gray-600' type="number" placeholder='25' />
                </div>

            </div>


            {/*------------- Product Sizes---------- */}
            <div>
                <p className='text-gray-700 mb-2'>Product Sizes</p>
                <div className='flex gap-3'>
                    <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])} >
                        <p className={`${sizes.includes("S") ? "bg-black text-white" : "border border-gray-300"} px-3 py-1  cursor-pointer text-gray-700`}>S</p>
                    </div>

                    <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}>
                        <p className={`${sizes.includes("M") ? "bg-black text-white" : "border border-gray-300"} px-3 py-1  cursor-pointer text-gray-700`}>M</p>
                    </div>

                    <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>
                        <p className={`${sizes.includes("L") ? "bg-black text-white" : "border border-gray-300"} px-3 py-1  cursor-pointer text-gray-700`}>L</p>
                    </div>

                    <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"])}>
                        <p className={`${sizes.includes("XL") ? "bg-black text-white" : "border border-gray-300"} px-3 py-1  cursor-pointer text-gray-700`}>XL</p>
                    </div>

                    <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])}>
                        <p className={`${sizes.includes("XXL") ? "bg-black text-white" : "border border-gray-300"} px-3 py-1  cursor-pointer text-gray-700`}>XXL</p>
                    </div>
                </div>
            </div>

            {/*------------- Add to bestseller---------- */}
            <div className='flex gap-2 mt-2'>
                <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" />
                <label className='text-[#2F2F2F]' htmlFor="">Add to bestseller</label>
            </div>

            {/* -------------submitButton---------------------- */}
            <button type='submit' className='bg-black text-white px-10 py-2 text-center active:bg-[#2F2F2F] rounded-sm'>ADD</button>
        </form >


    )
}

export default Add
