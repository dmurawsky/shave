import Link from 'next/link'
import {connect} from 'react-redux'

const Cart = ({items}) => {
  return (
    <Link href="/cart">
      <a id="cart">
        <p>$789.00</p>
        <img src="/static/assets/cart.svg" />
        <span>{Object.keys(items).length}</span>
      </a>
    </Link>
  )
}

export default connect(s => ({
  items: s.cart.items,
}), null)(Cart)
