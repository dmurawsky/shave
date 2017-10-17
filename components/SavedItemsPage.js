import Link from 'next/link'
import ListProduct from './ListProduct'
import products from '../scripts/products'

const SavedItemsPage = () => (
  <div id="savedItemsPage" className="content page">
    <h1>Saved Items</h1>
    {products.map((product, i)=>(<ListProduct key={'product'+i} product={product} />))}
  </div>
)

export default SavedItemsPage;
