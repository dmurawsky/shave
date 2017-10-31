import Link from 'next/link'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const roundCurrency = num =>  Number(Math.round(num+'e2')+'e-2')

const addZeros = num => {
  const arr = num.toString().split('.')
  if (!arr[1])
    return '$'+arr[0]+'.00'
  else if (arr[1].length === 1)
    return '$'+arr.join('.')+'0'
  return '$'+num.toString()
}

const Cart = ({count, subtotal}) => {
  return (
    <Link href="/cart">
      <a id="cart">
        <p>{subtotal?addZeros(roundCurrency(subtotal)):'$0.00'}</p>
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
