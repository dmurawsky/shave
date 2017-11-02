import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import {auth, database} from 'firebase'

class PaymentForm extends React.Component {
  constructor (props, context) {
    super(props, context)
    this._sumbit = this._sumbit.bind(this)
    this._onChange = this._onChange.bind(this)
    this.state = {
      cardName: '',
      cardNumber: '',
      expMo: '',
      expYr: '',
      cvv: '',
      error: ''
    }
  }

  _sumbit (e) {
    e.preventDefault()
    database().ref('users/' + auth().currentUser.uid + '/account/paymentMethods').push({
      cardName: this.state.cardName,
      last4: this.state.cardNumber.substring(this.state.cardNumber.length-4),
      cardType: 'Visa',
    }).then(snap => {
      
      window.location.pathname = this.props.navAfter || '/account/payment-methods'
    }).catch(err => {
      this.setState({ error: err.message })
      throw err
    })
  }

  _onChange (e) {
    const {name, value} = e.target
    this.setState(s=>({[name]:value}))
  }

  render () {
    return (
      <form onSubmit={this._sumbit} id="paymentForm">
        <p className="error-text">{this.state.error}</p>
        <div className="field">
          <label className="label">Name This Card</label>
          <div className="control">
            <input
              name="cardName"
              type="text"
              placeholder="Card Name"
              className="input"
              value={this.state.cardName}
              onChange={this._onChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              name="cardNumber"
              type="text"
              placeholder="Card Number"
              className="input"
              value={this.state.cardNumber}
              onChange={this._onChange}
            />
          </div>
        </div>
        <div className="columns is-desktop is-multiline">
          <div className="column is-3">
            <div className="field">
              <div className="control">
                <input
                  name="expMo"
                  type="text"
                  placeholder="Month"
                  className="input"
                  value={this.state.expMo}
                  onChange={this._onChange}
                />
              </div>
            </div>
          </div>
          <div className="column is-3">
            <div className="field">
              <div className="control">
                <input
                  name="expYr"
                  type="text"
                  placeholder="Year"
                  className="input"
                  value={this.state.expYr}
                  onChange={this._onChange}
                />
              </div>
            </div>
          </div>
          <div className="column is-3 is-offset-3">
            <div className="field">
              <div className="control">
                <input
                  name="cvv"
                  type="text"
                  placeholder="CVV"
                  className="input"
                  value={this.state.cvv}
                  onChange={this._onChange}
                />
              </div>
            </div>
          </div>
        </div>
        <button id="submitBtn" type="submit" className="button">Submit</button>
        <style jsx>{`
          #paymentForm {
            width: 400px;
            margin: 0 auto;
          }
        `}</style>
      </form>
    )
  }
}


PaymentForm.propTypes = {
  navAfter: PropTypes.string,
}

export default PaymentForm;
