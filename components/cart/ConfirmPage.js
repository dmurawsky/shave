import PropTypes from 'prop-types'
import Link from 'next/link'
import CartSteps from './CartSteps'
import CartProduct from './CartProduct'
import CartFooter from './CartFooter'
import {connect} from 'react-redux'


const ConfirmPage = ({cart,products,profile}) => (
  <div id="confirmPage" className="content page is-clearfix">
    <CartSteps step={4} />
    {Object.keys(cart.items).map(key=>(
      <CartProduct
        key={key}
        productId={key}
        product={products[key]}
        qty={cart.items[key]}
      />
    ))}
    <hr/>
    <CartFooter subtotal={cart.subtotal} profile={profile !== null} />
  </div>
)


ConfirmPage.propTypes = {
  cart: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  profile: PropTypes.object,
}

export default connect((s,{hit}) => ({
  cart: s.cart,
  profile: s.profile,
  products: s.products,
}), null)(ConfirmPage)
