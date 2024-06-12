import React from 'react'

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between'>
        <div className='flex flex-wrap gap-6'>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option value="">Type</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
            <input 
            type="text" 
            name='min' 
            placeholder='min price' 
            className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>
            <input 
            type="text" 
            name='min' 
            placeholder='max price' 
            className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option value="">Size</option>
                <option value="physical">Size</option>
                <option value="digital">Size</option>
            </select>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option value="">Colour</option>
                <option value="physical">Colour</option>
                <option value="digital">Colour</option>
            </select>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option value="">All Filters</option>
                <option value="physical"></option>
                <option value="digital"></option>
            </select>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] ring-1 ring-gray-400'>
                <option value="">Sort By</option>
                <option value="physical">Price (low to high)</option>
                <option value="digital">Price (high to low)</option>
                <option value="">Newest</option>
                <option value="">Oldest</option>
            </select>
        </div>
        <div className=''></div>
    </div>
  )
}

export default Filter