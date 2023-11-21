import { Link } from "react-router-dom"

const ImageCard = ({ children, image, link }) => {
    return (
        <div className="relative flex items-center justify-center m-3 overflow-hidden w-full h-[350px] group">
            <div className="absolute w-full h-full transition-all duration-700 ease-in-out transform bg-center bg-cover group-hover:scale-110"
                style={{ backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.4), rgba(30, 30, 30, 0.1)),url(${image})` }}>
            </div>
            <div className="bg-white w-2/5 p-4 z-10 flex flex-col">
                {children}
                <Link to={link} className="inline-block text-primary hover:text-dark">Voir plus</Link>
            </div>
        </div>
    )
}

export default ImageCard