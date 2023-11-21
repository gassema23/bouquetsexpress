import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb({colors='gray-800', items = [] }) {
    return (
        <ol className={`text-${colors} flex w-full justify-center text-sm pt-5`}>
            <li className="">
                <Link className='hover:text-primary' to="/">Accueil</Link> 
            </li>
            <li className={`before:content-['>'] before:px-2 before:inline-block before:text-${colors}`}>
                Nous joindre
            </li>
        </ol>
    )
}

export default Breadcrumb
