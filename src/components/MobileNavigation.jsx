import React, { useState } from 'react'
import { HiBars3CenterLeft, HiMiniUser, HiMiniChevronRight, HiXMark } from "react-icons/hi2";


const MobileNavigation = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

    const [navService, setNavService] = useState(false)
    const handleNavService = () => {
        setNavService(!navService);
    };

    return (
        <div className='lg:hidden'>
            {
                (nav) && (
                    <div onClick={handleNav}  className='fixed w-full p-3 h-screen bg-dark/50 z-40 top-0 left-0'></div>
                )
            }
            <button onClick={handleNav} className=' hover:text-gray-500 transition duration-500'>
                <HiBars3CenterLeft size={40} />
            </button>
            {
                (nav) && (
                    <div className='top-0 left-0 fixed w-full sm:w-1/2 h-screen bg-white flex flex-col z-50 shadow-sm border-r border-gray-200'>
                        <div className='flex flex-row border-b border-gray-200 text-lg'>
                            <button className='py-4 w-1/2 bg-primary/70 text-white items-center justify-center flex gap-x-2 transition duration-500 hover:bg-primary' onClick={handleNav} >
                                <HiXMark className='text-white' size={20} />
                                <span>Fermer</span>
                            </button>
                            <button className='py-4 w-1/2 items-center justify-center flex gap-x-2 hover:bg-gray-100 transition duration-500'>
                                <HiMiniUser className='' size={20} />
                                <span>Connexion</span>
                            </button>
                        </div>
                        <ul>
                            <li className='w-full border-b border-gray-200 flex justify-between'>
                                <a href="#accueil" className='px-2 py-4 w-full hover:bg-gray-100 transition duration-500'>Accueil</a>
                                <div className='border-l boder-gray-200 px-2 py-4 '><HiMiniChevronRight size={22} /></div>
                            </li>
                            <li className='w-full border-b border-gray-200 flex justify-between'>
                                <a href="#services" className='px-2 py-4 w-full hover:bg-gray-100 transition duration-500'>Services</a>
                                <div className='border-l boder-gray-200 px-2 py-4 ' onClick={handleNavService}><HiMiniChevronRight size={22} /></div>

                            </li>
                            <li className='w-full border-b border-gray-200 flex justify-between'>
                                <a href="#boutique" className='px-2 py-4 w-full hover:bg-gray-100 transition duration-500'>Boutique</a>
                                <div className='border-l boder-gray-200 px-2 py-4 '><HiMiniChevronRight size={22} /></div>
                            </li>
                            <li className='w-full border-b border-gray-200 flex justify-between'>
                                <a href="#a-propos" className='px-2 py-4 w-full hover:bg-gray-100 transition duration-500'>À propos</a>
                                <div className='border-l boder-gray-200 px-2 py-4 '><HiMiniChevronRight size={22} /></div>
                            </li>
                            <li className='w-full border-b border-gray-200 flex justify-between'>
                                <a href="#nous-joindre" className='px-2 py-4 w-full hover:bg-gray-100 transition duration-500'>Nous joindre</a>
                                <div className='border-l boder-gray-200 px-2 py-4 '><HiMiniChevronRight size={22} /></div>
                            </li>
                        </ul>
                        {
                            (!navService) && (
                                <ul className='w-full'>
                                    <li className='w-full border-b border-gray-200 flex justify-between'>
                                        <a href="#service1" className='px-2 py-4 w-full hover:bg-gray-100 transition duration-500'>Service 1</a>
                                    </li>
                                    <li className='w-full border-b border-gray-200 flex justify-between'>
                                        <a href="#service1" className='px-2 py-4 w-full hover:bg-gray-100 transition duration-500'>Service 2</a>
                                    </li>
                                    <li className='w-full border-b border-gray-200 flex justify-between'>
                                        <a href="#service1" className='px-2 py-4 w-full hover:bg-gray-100 transition duration-500'>Service 3</a>
                                    </li>
                                </ul>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default MobileNavigation
