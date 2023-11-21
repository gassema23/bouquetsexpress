
import BannerHomeSection from './sections/home/BannerHomeSection';
import BouquetExpoHomeSection from './sections/home/BouquetExpoHomeSection';
import ProductsHomeSection from './sections/home/ProductsHomeSection';
import FullWidhtImageSection from './sections/home/FullWidhtImageSection';
import NewsletterHomeSection from './sections/home/NewsletterHomeSection';

const Home = () => {
    return (
        <>
            <BannerHomeSection />
            <BouquetExpoHomeSection />
            <FullWidhtImageSection position="center" image="/images/chuttersnap-aEnH4hJ_Mrs-unsplash.jpg" titre="Événement spécial" titreBas="Duis placerat, urna a lacinia maximus" link="/" button="Obtenir un devis" />
            <ProductsHomeSection />
            <FullWidhtImageSection color="white" textPosition="center" position="center" image="/images/cheyenne-knowles-m36L9xV_UOs-unsplash.jpg" titreBas="Phasellus maximus lorem et elit auctor, vel convallis dolor ullamcorper. Cras convallis mauris in placerat dignissim." button="Notre histoire" link="/" />
            <NewsletterHomeSection />
        </>
    )
}

export default Home
