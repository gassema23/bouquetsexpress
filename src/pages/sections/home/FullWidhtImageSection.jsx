import React from 'react'
import Hero from '../../../components/Hero';
import Button from '../../../components/Button';
import MovingComponent from 'react-moving-text';
const FullWidhtImageSection = ({ image, titreHaut = false, titre = false, titreBas = false, link = false, button = false, position = "end", textPosition = "start", color = "dark" }) => {
    return (
        <div className='my-28'>
            <Hero banner={image} classStyle="bg-cover bg-center" height="h-[450px]">
                <div className={`container mx-auto h-full flex items-${position} justify-start overflow-hidden pb-10`}>
                    <div className={`flex flex-col space-y-2 items-${textPosition} px-4 lg:px-0`}>
                        {
                            titreHaut && (
                                <h5 className={`text-${color}`}>{titreHaut}</h5>
                            )
                        }{
                            titre && (
                                <h1 className={`text-7xl text-${color} font-bold`}>{titre}</h1>
                            )
                        }{
                            titreBas && (
                                <h4 className={`text-${color} text-2xl font-bold`}>{titreBas}</h4>
                            )
                        }{
                            button && (
                                <div className={` px-4 lg:px-0`}>
                                    <Button styleType={color}>{button}</Button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Hero>
        </div>
    )
}

export default FullWidhtImageSection