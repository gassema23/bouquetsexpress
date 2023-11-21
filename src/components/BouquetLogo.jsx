import logo from '/images/bouquetsExpress.png'

const BouquetLogo = ({ style }) => {
    return (
        <div>
            <a href="#" className=''>
                <img src={logo} className={style}></img>
            </a>
        </div>
    )
}

export default BouquetLogo
