import Link from 'next/link'
import {connect} from 'react-redux'

const Cart = ({items}) => {
  return (
    <a id="cart">
      <span>{Object.keys(items).length}</span>
    </a>
  )
}

export default connect(s => ({
  items: s.cart.items,
}), null)(Cart)
