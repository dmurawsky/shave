import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {auth, database} from 'firebase'

const inputs = [
  { name: 'addressName', placeholder: 'Address Name', type: 'text' },
  { name: 'address1', placeholder: 'Address', type: 'text' },
  { name: 'address2', placeholder: 'Address 2', type: 'text' },
  { name: 'city', placeholder: 'City', type: 'text' },
  { name: 'state', placeholder: 'State', type: 'text' },
  { name: 'zip', placeholder: 'Zip', type: 'text' },
]

class AddressForm extends React.Component {
  constructor (props, context) {
    super(props, context)
    this._sumbit = this._sumbit.bind(this)
    this._onChange = this._onChange.bind(this)
    this.state = {
      addressName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      error: ''
    }
  }

  _sumbit (e) {
    e.preventDefault()
    const {
      addressName,
      address1,
      address2,
      city,
      state,
      zip,
    } = this.state
    return database().ref('users/' + auth().currentUser.uid + '/account/addresses').push({
      addressName,
      address1,
      address2,
      city,
      state,
      zip,
    }).then(snap => {
      database().ref('users/' + auth().currentUser.uid + '/profile/' + this.props.addressType).set(snap.key)
    }).catch(err => {
      this.setState(()=>({ error: err.message }))
      throw err
    })
  }

  _onChange (e) {
    const {name, value} = e.target
    this.setState(s=>({[name]:value}))
  }

  render () {
    return (
      <form onSubmit={this._sumbit} id="addressForm">
        <p className="error-text">{this.state.error}</p>
        {inputs.map(({name, type, placeholder, className}) => (
          <div className="field" key={name}>
            <label className="label">{placeholder}</label>
            <div className="control">
              <input
                name={name}
                type={type}
                placeholder={placeholder}
                className="input"
                value={this.state[name]}
                onChange={this._onChange}
              />
            </div>
          </div>
        ))}
        <button id="submitBtn" type="submit" className="button">Save Address</button>
        <style jsx>{`
          #addressForm {
            max-width: 100%;
            width: 400px;
            margin: 30px auto;
          }
        `}</style>
      </form>
    )
  }
}

AddressForm.propTypes = {
  addressType: PropTypes.string.isRequired,
}

export default AddressForm
