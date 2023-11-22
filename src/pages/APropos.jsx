import Breadcrumb from '../components/Breadcrumb';
import Hero from '../components/Hero';
import MovingComponent from 'react-moving-text';
import TeamCard from '../components/TeamCard';

const APropos = () => {
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
                            <h1 className="text-7xl text-gray-800 font-bold uppercase">À propos de nous</h1>
                        </MovingComponent>
                        <Breadcrumb items={['À propos']} />
                    </div>
                </div>
            </Hero>
            <div className='flex w-full container mx-auto py-10 flex-col gap-4'>
                <div className='flex w-full pb-4 justify-center items-center'>
                    <div className=' w-full '>
                        <h2 className='font-bold text-4xl pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <p>Vestibulum dignissim justo sed sapien ullamcorper, a dictum massa posuere. Integer nisi elit, congue id efficitur rutrum, suscipit nec elit. Donec mattis sed ligula in commodo. Vivamus viverra lectus id dui ultricies tempus. Morbi a eleifend orci. Vivamus nibh erat, mattis sed ullamcorper in, bibendum eu mauris. Donec eget facilisis diam, eget consectetur ex. Pellentesque vitae risus interdum, facilisis velit ut, finibus ipsum. Morbi ullamcorper feugiat purus vel sodales.</p>
                    </div>
                    <div className='w-full'>
                        <img src="/images/will-TWJmj182gu4-unsplash.jpg" alt="" className='h-auto max-w-lg mx-auto' />
                    </div>
                </div>

                <div className='flex flex-col w-full text-center pt-4'>
                    <h5 className='font-bold text-xl pb-2'>Ut et finibus ante</h5>
                    <h3 className='font-bold text-3xl pb-4'>Notre Équipe</h3>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    <TeamCard nom="Karen Nelson" image="/images/members/member-10.png" description="Finance" />
                    <TeamCard nom="Helene Engels" image="/images/members/member-4.png" description="Co-Fondateur" />
                    <TeamCard nom="Leslie Libingston" image="/images/members/member-2.png" description="Co-Fondateur" />
                    <TeamCard nom="Joseph McFall" image="/images/members/member-3.png" description="Technicien" />
                </div>
            </div>
        </div>
    )
}

export default APropos
