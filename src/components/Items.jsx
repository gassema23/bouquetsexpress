import React, { useState } from 'react'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import Popover from './Popover';

const Items = ({ price, title, image='https://placehold.co/600x400', sale = false }) => {
  console.log()

  return (
    <div className='flex flex-col w-full group'>
      <div className='relative h-[350px] overflow-hidden'>
        {
          (sale) && (
            <div className='absolute right-4 top-4'>
              <span className="relative flex h-8 w-8 ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
                <span className="relative flex rounded-full h-8 w-8 bg-error justify-center items-center text-white text-xs">{sale}%</span>
              </span>
            </div>
          )
        }
        <img src={image} />
        <div className='bg-white flex p-2 divide-x divide-gray-300 absolute w-full -bottom-10 left-0 group-hover:bottom-0 transition-all duration-700'>
          <div className='w-full items-center flex justify-center relative'>
            <Popover content="Ajouter au coup de coeur">
              <HiOutlineHeart size={25} />
            </Popover>
          </div>
          <div className='w-full items-center flex justify-center relative'>
            <Popover content="Aperçu rapide">
              <HiOutlineMagnifyingGlass size={25} />
            </Popover>
          </div>
        </div>
      </div>
      <div className='font-bold mb-2'>
        {title}
      </div>
      <div className='font-bold text-primary'>
        {
          (sale) ? (
            <span className='flex space-x-4'>
              <span> ${(price-(price * sale / 100)).toFixed(2)} </span>
              <span className='text-gray-500 line-through'>${price}</span>
            </span>
          ) : (
            <span>${price}</span>
          )
        }
      </div>
    </div>
  )
}

export default Items