'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const ProductImages = () => {
    const [index, setIndex]  = useState(0)
    const images = [
    {
        id: 1,
        url: 'https://images.pexels.com/photos/8998018/pexels-photo-8998018.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 2,
        url: 'https://images.pexels.com/photos/23383950/pexels-photo-23383950/free-photo-of-a-black-and-gold-pitcher-and-two-spoons.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },{
        id: 3,
        url: 'https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=600'
    },{
        id: 4,
        url: 'https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
]
  return (
    <div className=''>
        <div className='h-[500px] relative'>
          <Image src={images[index].url}
           alt='' 
           fill 
           sizes='50vw'
           className='object-cover rounded-md'/>
        </div>
        <div className=' flex justify-bwtween gap-4 mt-8 cursor-pointer'>
          {images.map((img, i)=>(
            <div className='w-1/4 h-32 relative gap-4 mt-8'
             key={img.id} 
             onClick={()=> setIndex(i)}>
            <Image src={img.url}
            alt='' 
            fill 
            sizes='30vw'
            className='object-cover rounded-md'/>
           </div>
          ))}
        </div>
    </div>
  )
}

export default ProductImages