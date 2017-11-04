import React from 'react'
import {auth, database} from 'firebase'
import Order from './Order'


class OrdersList extends React.Component {
  constructor (props, context) {
    super(props, context)
    this._getOrders = this._getOrders.bind(this)
    this.state = {
      orders: {},
    }
    this._getOrders()
  }

  _getOrders () {
    if (auth().currentUser) {
      database().ref(`users/${auth().currentUser.uid}/orders`)
        .once('value', snap => {
          const orders = snap.val()
          if (orders) {
            this.setState(()=>({orders}))
          }
        })
    } else {
      setTimeout(this._getOrders, 1500)
    }
  }

  render () {
    const {orders} = this.state
    return (
      <div id="ordersList">
        {Object.keys(orders).map(key=>(
          <Order key={key} orderId={key} order={orders[key]}  />
        ))}
      </div>
    )
  }
}

export default OrdersList
