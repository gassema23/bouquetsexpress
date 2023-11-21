import React from 'react'
import MovingComponent from 'react-moving-text';
import Hero from '../../../components/Hero';
import Button from '../../../components/Button';

const BannerHomeSection = () => {
  return (
    <div className='mb-28'>
      <Hero classStyle="bg-cover bg-center">
        <div className="container mx-auto h-full flex items-center justify-end overflow-hidden">
          <div className="flex flex-col space-y-2 align-start px-4 lg:px-0">
            <MovingComponent
              type="slideInFromRight"
              duration="1000ms"
              delay="700ms"
              direction="alternate"
              timing="ease"
              iteration="1"
              fillMode="both">
              <h5 className="text-white">malesuada eget nisl et, venenatis porta enim.</h5>
            </MovingComponent>
            <MovingComponent
              type="slideInFromRight"
              duration="1000ms"
              delay="0s"
              direction="alternate"
              timing="ease"
              iteration="1"
              fillMode="both">
              <h1 className="text-7xl text-white font-bold">Lorem ipsum</h1>
            </MovingComponent>
            <MovingComponent
              type="slideInFromRight"
              duration="1000ms"
              delay="1s"
              direction="alternate"
              timing="ease"
              iteration="1"
              fillMode="both">
              <h4 className="text-white text-2xl font-bold">Duis placerat, urna a lacinia maximus</h4>
            </MovingComponent>
            <div className="pt-4">
              <MovingComponent
                type="slideInFromTop"
                duration="1000ms"
                delay="1.5s"
                direction="alternate"
                timing="ease"
                iteration="1"
                fillMode="both">
                <Button styleType="white">Acheter maintenant</Button>
              </MovingComponent>
            </div>
          </div>
        </div>
      </Hero>
    </div>
  )
}

export default BannerHomeSection
