import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import {auth, database} from 'firebase'

class PaymentMethods extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.componentDidMount = this.componentDidMount.bind(this)
    this._on = this._on.bind(this)
    this.state = {
      paymentMethods: {},
    }
  }

  componentDidMount () {
    this._on()
  }

  componentWillUnmount () {
    database().ref('users/' + auth().currentUser.uid + '/account/paymentMethods').off('value')
  }

  _on () {
    if (auth().currentUser) {
      database().ref('users/' + auth().currentUser.uid + '/account/paymentMethods')
        .on('value', snap => {
          const paymentMethods = snap.val()
          if (paymentMethods) {
            this.setState(()=>({paymentMethods}))
          } else {
            this.setState(()=>({paymentMethods: {}}))
          }
        })
    } else {
      setTimeout(this._on, 1500)
    }
  }

  _removePaymentMethod (id) {
    database().ref('users/' + auth().currentUser.uid + '/account/paymentMethods/' + id).remove()
  }

  _selectPaymentMethod (id) {
    database().ref('users/' + auth().currentUser.uid + '/profile/selectedPaymentMethod').set(id)
  }

  render () {
    const {paymentMethods} = this.state
    return (
      <div id="paymentMethods">
        <table className="table">
          <tbody>
            {Object.keys(paymentMethods).map(key=>(
              <tr
                key={key}
                onClick={this._selectPaymentMethod.bind(this, key)}
                className={this.props.selectedPaymentMethod===key?'selected':''}
                >
                <td>{paymentMethods[key].cardName}</td>
                <td>{paymentMethods[key].cardType}</td>
                <td>{'xxxx xxxx xxxx ' + paymentMethods[key].last4}</td>
                <td className="has-text-right">
                  <a onClick={this._removePaymentMethod.bind(this, key)}>Remove</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <style jsx>{`
          #paymentMethods {
            width: 600px;
            margin: 0 auto;
          }
          .table td {
            font-size: 15px;
          }
          .table tr.selected td {
            background: #084e6c;
            color: #eee;
          }
          .table tr.selected td a {
            color: #fff;
          }
        `}</style>
      </div>
    )
  }
}


PaymentMethods.propTypes = {
  paymentMethods: PropTypes.object,
  selectedPaymentMethod: PropTypes.string,
}

export default PaymentMethods;
