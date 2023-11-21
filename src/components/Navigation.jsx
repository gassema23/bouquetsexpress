import React from 'react'
import {
    Link,
    NavLink
} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav className="stroke hidden lg:flex items-center text-gray-800" id="navigation">
                <ul className="flex space-x-8">
                    <li className="inline-block">
                        <NavLink className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/">Accueil</NavLink>
                    </li>
                    <li className="inline-block group">
                        <NavLink className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/services">Services</NavLink>
                        {/*
                        <ul className="invisible absolute z-50 flex flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible transition duration-500">
                            <li
                                className="my-2 block py-1 text-gray-800 md:mx-2">
                                <a href="#">
                                    Product One
                                </a>
                            </li>
                            <li
                                className="my-2 block py-1 text-gray-800 md:mx-2">
                                <a href="#">
                                    Product Two
                                </a>
                            </li>
                            <li
                                className="my-2 block py-1 text-gray-800 md:mx-2">
                                <a href="#">
                                    Product Three
                                </a>
                            </li>
                            <li
                                className="my-2 block py-1 text-gray-800 md:mx-2">
                                <a href="#">
                                    Product Four
                                </a>
                            </li>
                        </ul>
                        */}
                    </li>
                    <li className="inline-block">
                        <NavLink className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/boutique">Boutique</NavLink>
                    </li>
                    <li className="inline-block">
                        <NavLink className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/a-propos">À propos</NavLink>
                    </li>
                    <li className="inline-block">
                        <NavLink className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/blogue">Blogue</NavLink>
                    </li>
                    <li className="inline-block">
                        <NavLink className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/nous-joindre">Nous joindre</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
