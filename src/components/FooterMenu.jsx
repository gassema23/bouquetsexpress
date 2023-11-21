import React from 'react'
import { Link } from 'react-router-dom'

const FooterMenu = () =>{
  return (
    
    <div>
    <h5 className='font-bold text-lg pb-4'>En bref</h5>
    <ul>
        <li>
            <Link to="/" className='hover:text-primary transition duration-300'>Services</Link>
        </li>
        <li>
            <Link to="/" className='hover:text-primary transition duration-300'>Boutique</Link>
        </li>
        <li>
            <Link to="/" className='hover:text-primary transition duration-300'>À propos</Link>
        </li>
        <li>
            <Link to="/" className='hover:text-primary transition duration-300'>Nous joindre</Link>
        </li>
        <li>
            <Link to="/" className='hover:text-primary transition duration-300'>Termes et conditions</Link>
        </li>
        <li>
            <Link to="/" className='hover:text-primary transition duration-300'>Politique de retour et de remboursement</Link>
        </li>
    </ul>
</div>
  )
}

export default FooterMenu
