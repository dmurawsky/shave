import Link from 'next/link'
import React from 'react'
import PropTypes from 'prop-types'
import {auth, database} from 'firebase'
import moment from 'moment'
import formatPrice from '../utils/formatPrice'


class Order extends React.Component {
  constructor (props, context) {
    super(props, context)
    this._getSubData = this._getSubData.bind(this)
    this._getOrder = this._getOrder.bind(this)
    let order = {}
    if (props.order) {
      order = props.order
      this._getSubData(order)
    } else {
      this._getOrder()
    }
    this.state = {
      order,
      paymentMethod: {},
      billingAddress: {},
      shippingAddress: {},
    }
  }

  _getSubData (order) {
    if (order.paymentMethod) {
      database().ref(order.paymentMethod).once('value', snap=>{
        const paymentMethod = snap.val()
        this.setState(()=>({paymentMethod}))
      })
    }
    if (order.billingAddress) {
      database().ref(order.billingAddress).once('value', snap=>{
        const billingAddress = snap.val()
        this.setState(()=>({billingAddress}))
      })
    }
    if (order.shippingAddress) {
      database().ref(order.shippingAddress).once('value', snap=>{
        const shippingAddress = snap.val()
        this.setState(()=>({shippingAddress}))
      })
    }
  }

  _getOrder () {
    if (auth().currentUser) {
      database().ref(`users/${auth().currentUser.uid}/orders/${this.props.orderId}`)
        .once('value', snap => {
          const order = snap.val()
          if (order) {
            this.setState(()=>({order}))
            this._getSubData(order)
          }
        })
    } else {
      setTimeout(this._getOrder, 1500)
    }
  }

  _getTotal (purchases) {
    if (purchases) {
      return formatPrice(
        Object.keys(purchases).reduce((prev, key)=>{
          const {price, qty} = purchases[key]
          return (prev + (price * qty))
        }, 0)
      )
    }
  }

  render () {
    const {orderId} = this.props
    const {order, shippingAddress, paymentMethod} = this.state
    return (
      <div className="panel">
        <div className="panel-heading">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <div>
                  <p className="heading">Order Placed</p>
                  <p className="subheading">{moment(order.createdAt).format('MMM Do `YY, h:mm a')}</p>
                </div>
              </div>
              <div className="level-item">
                <div>
                  <p className="heading">Total</p>
                  <p className="subheading">{this._getTotal(order.purchases)}</p>
                </div>
              </div>
              <div className="level-item">
                <div>
                  <p className="heading">Ship to:</p>
                  <p className="subheading">{shippingAddress.addressName}</p>
                </div>
              </div>
              <div className="level-item">
                <div>
                  <p className="heading">Charged to:</p>
                  <p className="subheading">xxxx xxxx xxxx {paymentMethod.last4}</p>
                </div>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <div>
                  {order.id && <p className="heading">Order ID: {order.id.split('_')[1]}</p>}
                  <p className="subheading">
                    <Link href="/account"><a>Order Details</a></Link> | <Link href="/account"><a>Invoice</a></Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {order.purchases && Object.keys(order.purchases).map(key=>{
          const purchase = order.purchases[key]
          return (
            <div key={key} className="panel-block">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <img className="purchase-img" src={purchase.photo} />
                  </div>
                  <div className="level-item">
                    <div>
                      <h3><Link href={'/product?id=' + purchase.product_id}><a>{purchase.name}</a></Link></h3>
                      <p>{formatPrice(purchase.price)} x {purchase.qty}</p>
                      <p>{formatPrice(purchase.price * purchase.qty)}</p>
                    </div>
                  </div>
                </div>
                <div className="level-right">
                  <div>
                    <a className="button primary">Buy It Again</a>
                    <a className="button">Return Item</a>
                    <a className="button">Write a Review</a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <style jsx>{`
          .level {
            width: 100%;
          }
          .subheading {
            font-size: 15px;
            font-family: Arial, sans-serif;
          }
          .level-item {
            margin: 0 15px;
          }
          img.purchase-img {
            width: 120px;
          }
          .level-right {
            width: 200px;
          }
          .level-right .button {
            width: 200px;
            margin-bottom: 10px;
          }
          .button.primary {
            background: #084e6c;
            color: white;
          }
        `}</style>
      </div>
    )
  }
}

Order.propTypes = {
  orderId: PropTypes.string.isRequired,
  order: PropTypes.object,
}

export default Order;
