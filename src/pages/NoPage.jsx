import { Link } from "react-router-dom"
import InputWithButton from "../components/InputWithButton"

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const NoPage = () => {
    return (
        <div className="h-screen px-4 bg-white items-center content-center justify-center flex flex-col container mx-auto">
            <h1 className="tracking-widest text-gray-800 uppercase text-8xl py-4">404</h1>
            <h3 className="tracking-widest text-gray-800 uppercase text-2xl">Page introuvable</h3>
            <p className="text-mute pb-4">Veuillez retourner à la page d'<Link to="/" className="text-primary hover:text-mute transition duration-300">accueil</Link></p>
            <div className="w-3/4">
                <InputWithButton inputName="rechercher" inputPlaceholder="Rechercher" inputClass="w-full">
                    <HiOutlineMagnifyingGlass size={25} />
                </InputWithButton>
            </div>
        </div>
    )
}

export default NoPage
