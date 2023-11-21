import Items from '../../../components/Items'
import Button from '../../../components/Button'

const ProductsHomeSection = () => {
    return (
        <div className='container mx-auto my-28 '>
            <div className='px-4 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-4'>
                <Items price="10" title="Item 1" image="/images/Items/items_3.png" />
                <Items price="59" title="Item 2" image="/images/Items/items_2.png" />
                <Items price="79" title="Item 3" image="/images/Items/items_4.png" />
                <Items price="89" sale="15" title="Item 4" image="/images/Items/items_1.png" />
            </div>
            <div className='mt-4 flex w-full justify-center'>
                <Button>Voir tous les produits</Button>
            </div>
        </div>
    )
}

export default ProductsHomeSection