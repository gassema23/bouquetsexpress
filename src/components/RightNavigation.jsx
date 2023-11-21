import React from 'react'
import { HiOutlineUser } from "react-icons/hi2";
import Panier from "./Panier";
import Search from './Search';
const RightNavigation = () => {
    return (
        <>
            <div className="hidden lg:flex items-center text-gray-800">
                <Search />
                <button
                    className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center transition-colors duration-500 hover:text-primary">
                    <HiOutlineUser size={25} />
                </button>
                <Panier />
            </div>
        </>
    )
}
export default RightNavigation
