import PropTypes from 'prop-types'
import Link from 'next/link'
import { connect } from 'react-redux'
import PaymentMethods from './PaymentMethods'
import PaymentForm from './PaymentForm'
import AddressForm from './AddressForm'
import Addresses from './Addresses'

const PaymentMethodsPage = ({ profile }) => (
  <div id="paymentMethodsPage" className="content page">
    <div className="columns">
      <div className="column">
        <h2 className="has-text-centered">Default Payment Method</h2>
        {profile && (
          <PaymentMethods
            selectedPaymentMethod={profile.selectedPaymentMethod}
          />
        )}
      </div>
      <div className="column">
        <h2 className="has-text-centered">Default Billing Address</h2>
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
)

PaymentMethodsPage.propTypes = {
  profile: PropTypes.object,
}

export default connect(s => ({
  profile: s.profile,
}))(PaymentMethodsPage)
