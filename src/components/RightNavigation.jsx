import React from 'react'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import Panier from "./Panier";
const RightNavigation = () => {
    return (
        <>
            <div className="hidden lg:flex items-center text-gray-800">
                <button
                    className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center transition-colors duration-500 hover:text-primary">
                    <HiOutlineMagnifyingGlass size={25} />
                </button>
                <button
                    className="relative lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center transition-colors duration-500 hover:text-primary">
                    <HiOutlineUser size={25} />
                </button>
                <Panier />
            </div>
        </>
    )
}
export default RightNavigation
