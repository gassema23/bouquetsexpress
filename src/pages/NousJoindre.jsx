import Breadcrumb from '../components/Breadcrumb';
import Hero from '../components/Hero';
const NousJoindre = () => {
    return (
        <div>
            <Hero banner="/images/bg_page.png" height="h-[350px]">
                <div className="container mx-auto h-full flex items-center justify-center mt-[96px]">
                    <div className="flex flex-col space-y-2 align-start px-4 lg:px-0">
                        <h1 className="text-7xl text-gray-800 font-bold">Nous joindre</h1>
                        <Breadcrumb />            
                    </div>
                </div>
            </Hero>
        </div>
    )
}

export default NousJoindre
