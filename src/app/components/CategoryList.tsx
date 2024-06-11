import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
        <div className='flex gap-4 md:gap-8'>
            <Link href='/List?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/20508967/pexels-photo-20508967/free-photo-of-man-in-jacket-and-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' fill sizes='20vw' className='object-cover'></Image>
                </div>
                <h1 className='mt-8 font-light  text-cl traking-wide '></h1>
            </Link>
            <Link href='/List?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/20508967/pexels-photo-20508967/free-photo-of-man-in-jacket-and-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' fill sizes='20vw' className='object-cover'></Image>
                </div>
                <h1 className='mt-8 font-light  text-cl traking-wide '></h1>
            </Link> <Link href='/List?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/20508967/pexels-photo-20508967/free-photo-of-man-in-jacket-and-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' fill sizes='20vw' className='object-cover'></Image>
                </div>
                <h1 className='mt-8 font-light  text-cl traking-wide '></h1>
            </Link> <Link href='/List?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/20508967/pexels-photo-20508967/free-photo-of-man-in-jacket-and-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' fill sizes='20vw' className='object-cover'></Image>
                </div>
                <h1 className='mt-8 font-light  text-cl traking-wide '></h1>
            </Link> <Link href='/List?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/20508967/pexels-photo-20508967/free-photo-of-man-in-jacket-and-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' fill sizes='20vw' className='object-cover'></Image>
                </div>
                <h1 className='mt-8 font-light  text-cl traking-wide '></h1>
            </Link> <Link href='/List?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/20508967/pexels-photo-20508967/free-photo-of-man-in-jacket-and-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' fill sizes='20vw' className='object-cover'></Image>
                </div>
                <h1 className='mt-8 font-light  text-cl traking-wide '></h1>
            </Link>
        </div>
   </div>
  )
}

export default CategoryList