import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';


const Orders = () => {

  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {

      if (!token) {
        return null;
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            allOrdersItem.push(item);
          })
        })
        console.log(allOrdersItem);
        setOrderData(allOrdersItem.reverse());
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadOrderData();
  }, [token])


  return (
    <div className='pt-8 sm:pt-16'>

      <div className='text-2xl'>
        <Title text1={'MY'} text2={' ORDERS'} />
      </div>

      <div>
        {
          orderData.map((item, index) => (
            <div key={index} className='py-4 border-t border-gray-300 text-[#2F2F2F] grid grid-cols-[4fr]  sm:grid-cols-[4fr_2fr_0.5fr] items-center justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex mt-1 gap-3 text-base text-gray-600'>
                    <p className='text-black'>{currency}{item.price}</p>
                    <p className='text-black'>Quantity: <span className='text-gray-700'>{item.quantity}</span></p>
                    <p className='text-black'>Size: <span className='text-gray-700'>{item.size}</span> </p>
                  </div>
                  <p className='mt-1 text-black'>Date: <span className='text-gray-700'>{new Date(item.date).toDateString()}</span></p>
                  <p className='mt-1 text-black'>Payment: <span className='text-gray-700'>{item.paymentMethod}</span></p>
                </div>
              </div>

              <div className='flex justify-between pl-22 sm:pl-0'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base text-gray-700'>{item.status}</p>
                </div>
                <div>
                  <button onClick={loadOrderData} className='w-full sm:w-auto bg-black text-white border active:bg-gray-800 px-4 py-2 text-sm font-medium rounded-sm cursor-pointer '>TrackOrder</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Orders
