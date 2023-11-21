import React from 'react'
import ImageCard from '../../../components/ImageCard';

const BouquetExpoHomeSection = () => {
    return (
        <div className='container mx-auto my-28 px-4 md:px-0 grid-cols-1 lg:grid-cols-3 grid gap-4'>
            <ImageCard
                image="/images/studio-guyub-SIQmdpHteVg-unsplash.jpg" link="/">
                <h4 className='text-xl pb-2'>À partir de $79</h4>
                <h3 className='text-2xl font-bold py-2'>Bouquet de mariage</h3>
            </ImageCard>
            <ImageCard
                image="/images/peter-bucks-wjdHhmiS2Pk-unsplash.jpg" link="/">
                <h4 className='text-xl pb-2'>À partir de $39</h4>
                <h3 className='text-2xl font-bold py-2'>Bouquet d'anniversaire</h3>
            </ImageCard>
            <ImageCard
                image="/images/amy-shamblen-qdPnQuGeuwU-unsplash.jpg" link="/">
                <h4 className='text-xl pb-2'>À partir de $59</h4>
                <h3 className='text-2xl font-bold py-2'>Bouquet sur mesure</h3>
            </ImageCard>
        </div>
    )
}

export default BouquetExpoHomeSection
