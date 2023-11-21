import Items from '../../../components/Items'
import Button from '../../../components/Button'
import datas from '../../../datas/products.json';

const ProductsHomeSection = () => {
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    const newList = shuffle(datas);
    const listItems = newList.slice(0, 4).map((item) =>
        <Items key={item.productId} price={item.price} title={item.name} image={item.photo} sale={item.sale} />
    );
    return (
        <div className='container mx-auto my-28 '>
            <div className='px-4 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-4'>
                { listItems }
            </div>
            <div className='mt-4 flex w-full justify-center'>
                <Button>Voir tous les produits</Button>
            </div>
        </div>
    )
}

export default ProductsHomeSection