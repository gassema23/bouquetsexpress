import React from 'react'

const TeamCard = ({ nom, image, description }) => {
    return (
        <div className="relative flex items-center justify-center m-3 overflow-hidden w-full h-[370px] group">
            <div className="absolute w-full h-full transition-all duration-700 ease-in-out transform bg-center bg-cover group-hover:scale-110"
                style={{ backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.4), rgba(30, 30, 30, 0.1)),url(${image})` }}>
            </div>
            <div className="w-full flex h-full flex-col justify-end relative items-center pb-4">
                <div className='text-white text-xl font-bold'>{nom}</div>
                <div className='text-white'>{description}</div>
            </div>
        </div>
    )
}

export default TeamCard