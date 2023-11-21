import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const FooterAddress = () => {
    return (
        <div>
            <h5 className='font-bold text-lg pb-4'>Bouquet Expres</h5>
            <p>555 Rue Notre Dame</p>
            <p>Trois-Rivière, QC, G8T 0A7</p>
            <p>123 111-2233</p>
            <div className='flex gap-x-4 mt-4 w-full justify-center md:justify-normal'>
                <Link href="/" className='hover:text-primary text-mute transition duration-500'><FaFacebookF /></Link>
                <Link href="/" className='hover:text-primary text-mute transition duration-500'><FaInstagram /></Link>
                <Link href="/" className='hover:text-primary text-mute transition duration-500'><FaPinterestP /></Link>
            </div>
        </div>
    )
}

export default FooterAddress
