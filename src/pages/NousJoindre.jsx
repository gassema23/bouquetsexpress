import Input from '../components/Input';
import Breadcrumb from '../components/Breadcrumb';
import Hero from '../components/Hero';
import MovingComponent from 'react-moving-text';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

const NousJoindre = () => {

    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    }
    return (
        <div>
            <Hero banner="/images/bg_page.png" height="h-[350px]">
                <div className="container mx-auto h-full flex items-center justify-center mt-[96px]">
                    <div className="flex flex-col space-y-2 align-start px-4 lg:px-0">
                        <MovingComponent
                            type="slideInFromBottom"
                            duration="1500ms"
                            delay="0"
                            direction="alternate"
                            timing="ease"
                            iteration="1"
                            fillMode="both">
                            <h1 className="text-7xl text-gray-800 font-bold uppercase">Nous joindre</h1>
                        </MovingComponent>
                        <Breadcrumb />
                    </div>
                </div>
            </Hero>
            <div className='flex w-full container mx-auto py-10'>
                <div className='flex w-1/2 flex-col'>
                    <div className='mb-4'>
                        <h3 className='font-bold text-xl'>Trouver notre boutique</h3>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88090.40896839037!2d-72.67818963583953!3d46.372854401737705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc7c8cfcf1f467d%3A0xb9d6b0325e28c3d2!2sTrois-Rivi%C3%A8res%2C%20QC!5e0!3m2!1sfr!2sca!4v1700605771475!5m2!1sfr!2sca"
                            width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div className='flex w-1/2 flex-col'>
                    <div className='mb-4'>
                        <h3 className='font-bold text-xl'>Prenez contact avec nous</h3>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <Input name="name" placeholder='Nom complet' />
                        <Input name="email" placeholder='Adresse courriel' type="email" />
                        <Input name="subject" placeholder='Votre sujet' />
                        <TextArea name="message" placeholder='Votre message' />
                    </div>
                    <div className='flex justify-start my-4'>
                        <Button>Envoyer-nous</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NousJoindre
