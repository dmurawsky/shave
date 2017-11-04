import PropTypes from 'prop-types'
import Link from 'next/link'
import CartSteps from './CartSteps'
import {connect} from 'react-redux'
import PaymentMethods from '../PaymentMethods'
import PaymentForm from '../PaymentForm'
import AddressForm from '../AddressForm'
import Addresses from '../Addresses'


const PaymentPage = ({profile}) => (
  <div id="cartPage" className="content page is-clearfix">
    <div id="userInfoPage" className="content page">
    <CartSteps step={3} />
      <h1>
        Billing Information
        <Link href="/cart/confirm"><button className="button is-pulled-right">Complete Order</button></Link>
      </h1>
      <hr />
      <div className="columns">
        <div className="column">
          <h2 className="has-text-centered">Select Credit Card</h2>
          {profile && <PaymentMethods selectedPaymentMethod={profile.selectedPaymentMethod} />}
        </div>
        <div className="column">
          <h2 className="has-text-centered">Select Billing Address</h2>
          <Addresses addressType="selectedBillingAddress" />
        </div>
      </div>
      <hr />
      <div className="columns">
        <div className="column">
          <h2 className="has-text-centered">Add New Card</h2>
          <PaymentForm navAfter="/cart/confirm" />
        </div>
        <div className="column">
          <h2 className="has-text-centered">Add New Address</h2>
          <AddressForm addressType="selectedShippingAddress" />
        </div>
      </div>
    </div>
  </div>
)


PaymentPage.propTypes = {
  profile: PropTypes.object,
}

export default connect((s,{hit}) => ({
  profile: s.profile,
}))(PaymentPage)
