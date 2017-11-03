import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import CartSteps from './CartSteps'
import Order from '../Order'
import {auth, database} from 'firebase'
import {connect} from 'react-redux'
import Promise from 'bluebird'
import moment from 'moment'


class ConfirmPage extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.componentDidMount = this.componentDidMount.bind(this)
    this._checkout = this._checkout.bind(this)
    this.state = {
      orderId: null,
      processed: false,
      order: {},
      paymentMethod: {},
      billingAddress: {},
      shippingAddress: {},
    }
  }

  componentDidMount () {
    if (Object.keys(this.props.cart.items).length > 0) {
      this._checkout()
    }
  }

  _checkout () {
    if (auth().currentUser) {
      const uid = auth().currentUser.uid
      database().ref('users/' + uid + '/orders').push({
        id: uid + '_' + Date.now(),
        createdAt: moment().format(),
        status: 'Preparing to Ship',
        paymentMethod: `users/${uid}/account/paymentMethods/${this.props.profile.selectedPaymentMethod}`,
        billingAddress: `users/${uid}/account/addresses/${this.props.profile.selectedBillingAddress}`,
        shippingAddress: `users/${uid}/account/addresses/${this.props.profile.selectedShippingAddress}`,
      }).then(snap => {
        this.setState(()=>({orderId: snap.key}))
        Promise.all(Object.keys(this.props.cart.items).map(key=>{
          const qty = this.props.cart.items[key]
          const {name, description, price} = this.props.products[key]
          return database().ref(`users/${uid}/orders/${snap.key}/purchases`).push({
              product_id: key,
              qty,
              name,
              description,
              price,
              photo: '/static/assets/products/prod1.jpg',
            })
        })).then(()=>{
          database().ref(`users/${uid}/cart`).remove()
          this.setState(()=>({processed: true}))
        })
      })
    } else {
      setTimeout(this._checkout, 1500)
    }
  }

  render () {
    const {cart, products, profile} = this.props
    const {orderId, processed} = this.state
    return (
      <div id="confirmPage" className="content page is-clearfix">
        <CartSteps step={4} />
        <hr/>
        {orderId && processed && <Order orderId={orderId} />}
      </div>
    )
  }
}

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
