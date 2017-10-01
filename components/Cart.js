import Link from 'next/link'
import {connect} from 'react-redux'

const Cart = ({items}) => (
  <a className="navbar-item" href="#">
    <span className="icon" style={{color: '#333', marginRight: 10}}>
      <i className="fa fa-shopping-cart fa-2x"></i>
    </span> {Object.keys(items).length} Items
  </a>
)

export default connect(s => ({
  items: s.cart.items,
}), null)(Cart)
