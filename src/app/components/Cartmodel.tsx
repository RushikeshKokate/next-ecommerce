import React from 'react'
import Image from 'next/image';
const Cartmodel = () => {
  const cartItems = true;
  return (
    <div className=' w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white top-12 right-0 flex flex-col gap-6'>
      {!cartItems 
      ? (<div>Cart is empty</div>)
      :(<>
        <h2 className='text-xl'>Shoping Cart</h2>
      <div className='flex gap-4'> 
         <Image src='https://images.pexels.com/photos/25003249/pexels-photo-25003249/free-photo-of-a-woman-standing-on-the-rocks-near-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' 
         alt='' 
         width={72}
          height={96} 
          className='object-cover rounded-md'>
          </Image>
          <div className='flex flex-col justify-between w-full'>
            {/* TOP */}
            <div>
            {/* Title */}
            <div className=' flex items-center justify-between gap-8'>
               <h3 className='font-semibold'>Product Name</h3>
               <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
            </div>
            {/* Description */}
              <div className='text-sm text-gray-500'>
              available
              </div>
            </div>
            {/* BOTTOM */}
            
            <div className='flex justify-between text-sm' >
            <span className='text-gray-500'>Qty. 2</span>
            <span className='text-blue-500'>Remove</span>
            </div>
            <p className='text-gray-500 text-sm mt-2 mb-4'>
              Shiping and taxes calculated at checkout.
            </p>
            <div className='flex justify-between text-sm'>
              <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
              <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
            </div>
          </div>
      </div>
      <div className='flex gap-4'> 
         <Image src='https://images.pexels.com/photos/25003249/pexels-photo-25003249/free-photo-of-a-woman-standing-on-the-rocks-near-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' 
         alt='' 
         width={72}
          height={96} 
          className='object-cover rounded-md'>
          </Image>
          <div className='flex flex-col justify-between w-full'>
            {/* TOP */}
            <div>
            {/* Title */}
            <div className=' flex items-center justify-between gap-8'>
               <h3 className='font-semibold'>Product Name</h3>
               <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
            </div>
            {/* Description */}
              <div className='text-sm text-gray-500'>
              available
              </div>
            </div>
            {/* BOTTOM */}
            
            <div className='flex justify-between text-sm' >
            <span className='text-gray-500'>Qty. 2</span>
            <span className='text-blue-500'>Remove</span>
            </div>
            <p className='text-gray-500 text-sm mt-2 mb-4'>
              Shiping and taxes calculated at checkout.
            </p>
            <div className='flex justify-between text-sm'>
              <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
              <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
            </div>
          </div>
      </div></>)}
    </div>
  )
}

export default Cartmodel