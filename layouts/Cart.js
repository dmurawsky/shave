import Link from 'next/link'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import formatPrice from '../utils/formatPrice'

const Cart = ({count, subtotal}) => {
  return (
    <Link href="/cart">
      <a id="cart">
        <p>{subtotal?formatPrice(subtotal):'$0.00'}</p>
        <img src="/static/assets/cart.svg" />
        <span id="cartCount">{count?count:0}</span>
      </a>
    </Link>
  )
}

Cart.propTypes = {
  count: PropTypes.number,
  subtotal: PropTypes.number,
}

export default connect(s => ({
  count: s.cart.count,
  subtotal: s.cart.subtotal,
}), null)(Cart)
