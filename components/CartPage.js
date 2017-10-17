import Link from 'next/link'
import CartProduct from './CartProduct'
import CartSidebar from './CartSidebar'
import products from '../scripts/products'

const CartPage = () => (
  <div id="cartPage" className="content page">
    <h1>Your Cart</h1>
    {products.map((product, i)=>(<CartProduct key={'product'+i} product={product} />))}
    <CartSidebar />
  </div>
)

export default CartPage
