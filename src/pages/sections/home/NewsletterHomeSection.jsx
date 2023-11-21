import React from 'react'
import InputWithButton from '../../../components/InputWithButton'
import { HiMiniPaperAirplane } from "react-icons/hi2";

const NewsletterHomeSection = () => {
    return (
        <div className='container mx-auto flex my-28 justify-center items-center gap-x-24 px-4 md:px-0'>
            <div className='md:flex hidden'>
                <img src="/images/nicholas-kusuma-zsMhfiy_eek-unsplash.jpg" alt="" className='h-[400px] w-full' />
            </div>
            <div className=' border border-primary px-16 py-24'>
                <div className='text-center'>
                    <h3 className='text-2xl font-bold'>Obtenez les dernières mises à jour</h3>
                    <p>Abonnez-vous à notre newsletter et bénéficiez d'une réduction de 30%</p>
                    <InputWithButton inputName="newsletter_email" inputPlaceholder="Entrer votre adresse courriel..." inputClass="w-full" inputType="email">
                        <HiMiniPaperAirplane size={30} className='-rotate-45' />
                    </InputWithButton>
                </div>
            </div>
        </div>
    )
}

export default NewsletterHomeSection