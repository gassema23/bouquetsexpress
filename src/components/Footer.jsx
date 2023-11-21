import React from 'react'
import FooterAddress from './FooterAddress'
import FooterMenu from './FooterMenu'
import FooterHour from './FooterHour'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-gray-200/50'>
            <div className='container mx-auto flex text-center md:text-justify justify-center md:justify-between pt-10 px-4 md:px-0 flex-col md:flex-row md:gap-0 gap-y-10'>
                <div>
                    <FooterAddress />
                </div>
                <div>
                    <FooterMenu />
                </div>
                <div>
                    <FooterHour />
                </div>
            </div>
            <div className='text-center text-xs pt-4 pb-1'>© Bouquets Express 2023 - Une création de <Link href='/' className="relative w-fit inline-block after:block after:content-[''] after:absolute after:h-[1px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-cursive text-2xl after:bottom-2">Mathieu Gasse</Link></div>
        </footer>
    )
}

export default Footer
