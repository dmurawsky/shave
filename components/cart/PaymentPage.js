import PropTypes from 'prop-types'
import Link from 'next/link'
import CartSteps from './CartSteps'
import {connect} from 'react-redux'
import PaymentMethods from '../PaymentMethods'
import PaymentForm from '../PaymentForm'


const PaymentPage = ({cart,products,profile}) => (
  <div id="cartPage" className="content page is-clearfix">
    <div id="userInfoPage" className="content page">
      <CartSteps step={3} />
      <h1>Payment Information</h1>
      <hr />
      <PaymentForm navAfter="/cart/confirm" />
      <hr />
      {profile && <PaymentMethods selectedPaymentMethod={profile.selectedPaymentMethod} />}
    </div>
  </div>
)


PaymentPage.propTypes = {
  cart: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  profile: PropTypes.object,
}

export default connect((s,{hit}) => ({
  cart: s.cart,
  profile: s.profile,
  products: s.products,
}), null)(PaymentPage)
