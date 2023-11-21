import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineTrash } from "react-icons/hi2";

const ItemsPanier = () => {
    return (
        <div className='flex items-center w-full border-b border-mute-50 justify-between my-2 py-2'>
            <div className='w-1/4'>
                <img src="/images/Items/items_2.png" className='w-full' />
            </div>
            <div className='w-1/2'>
                <h5><Link to="/" className='hover:text-primary font-bold transition duration-300'>Title</Link></h5>
                <p className=''>Qte: 1</p>
                <p className=''>$89.00</p>
            </div>
            <div className=''>
                <button className='hover:text-primary transition duration-300'><HiOutlineTrash /></button>
            </div>

        </div>
    )
}

export default ItemsPanier
