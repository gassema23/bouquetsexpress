const Hero = ({ banner="/images/slide3.png", children, height="h-screen", classStyle="" }) => {
    return (
        <>
            <div
                className={`bg-blend-hue ${height} justify-around items-center relative bg-fixed ${classStyle} bg-no-repeat w-full`}
                style={{ backgroundImage: `url(${banner})` }}>
                {children}
            </div>
        </>
    )
}

export default Hero
