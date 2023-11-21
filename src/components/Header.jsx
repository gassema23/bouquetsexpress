import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import RightNavigation from './RightNavigation';
import BouquetLogo from './BouquetLogo';

const Header = () => {
    return (
        <header className='w-full fixed top-0 left-0 z-30 bg-white shadow'>
            <div className='flex justify-between items-center container mx-auto py-2'>
                <MobileNavigation />
                <BouquetLogo style="h-20" />
                <Navigation />
                <RightNavigation />
            </div>
        </header>
    )
}

export default Header
