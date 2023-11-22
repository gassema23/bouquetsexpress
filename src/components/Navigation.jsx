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
                        <NavLink className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/services/">Services</NavLink>
                        {
                            <ul className="py-1 invisible absolute z-50 flex flex-col bg-white text-gray-800 shadow-xl group-hover:visible transition duration-500 border border-gray-200">
                                <li>
                                    <Link to="/services/douce-attention" className='block text-dark hover:bg-gray-100 py-3 px-4 transition duration-500'>
                                        Douce attention
                                    </Link>
                                </li>
                                <li>
                                    <a href="/services/celebration-intermediaire"className="block text-dark hover:bg-gray-100 py-3 px-4 transition duration-500">
                                        Célébration intermédiaire
                                    </a>
                                </li>
                                <li>
                                    <a href="/services/grande-celebration"className="block text-dark hover:bg-gray-100 py-3 px-4 transition duration-500">
                                        Grande Célébration
                                    </a>
                                </li>
                            </ul>
                        }
                    </li>
                    <li className="inline-block">
                        <NavLink className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/a-propos">À propos</NavLink>
                    </li>
                    <li className="inline-block">
                        <NavLink className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/boutique">Boutique</NavLink>
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
