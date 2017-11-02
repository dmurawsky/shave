import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import {auth, database} from 'firebase'

const inputs = [
  { name: 'firstName', placeholder: 'First Name', type: 'text', className: 'is-half-desktop' },
  { name: 'lastName', placeholder: 'Last Name', type: 'text', className: 'is-half-desktop' },
  { name: 'email', placeholder: 'Email', type: 'email', className: 'is-half-desktop' },
  { name: 'confirmEmail', placeholder: 'Confirm Email', type: 'email', className: 'is-half-desktop' },
  { name: 'password', placeholder: 'Password', type: 'password', className: 'is-half-desktop' },
  { name: 'confirmPassword', placeholder: 'Confirm Password', type: 'password', className: 'is-half-desktop' },
  { name: 'address1', placeholder: 'Address', type: 'text', className: 'is-half-desktop' },
  { name: 'address2', placeholder: 'Address 2', type: 'text', className: 'is-half-desktop' },
  { name: 'city', placeholder: 'City', type: 'text', className: 'is-half-desktop' },
  { name: 'state', placeholder: 'State', type: 'text', className: 'is-one-quarter-desktop' },
  { name: 'zip', placeholder: 'Zip', type: 'text', className: 'is-one-quarter-desktop' },
]

class SignUpForm extends React.Component {
  constructor (props, context) {
    super(props, context)
    this._sumbit = this._sumbit.bind(this)
    this._onChange = this._onChange.bind(this)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
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
    const credential = auth.EmailAuthProvider.credential(this.state.email, this.state.password)
    auth().currentUser.linkWithCredential(credential).then(user => {
      const {
        firstName,
        lastName,
        email,
        address1,
        address2,
        city,
        state,
        zip,
      } = this.state
      return database().ref('users/' + user.uid + '/profile').update({
        firstName,
        lastName,
        email,
        address1,
        address2,
        city,
        state,
        zip,
      });
    }).then(() => {
      window.location.pathname = this.props.navAfter || '/'
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
      <form onSubmit={this._sumbit} id="signUpForm">
        <p className="error-text">{this.state.error}</p>
        <div className="columns is-desktop is-multiline">
          {inputs.map(({name, type, placeholder, className}) => (
            <div key={name} className={'column ' + className}>
              <div className="field">
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
            </div>
          ))}
        </div>
        <button id="submitBtn" type="submit" className="button">Submit</button>
        <style jsx>{`
          #signUpForm {
          }
        `}</style>
      </form>
    )
  }
}


SignUpForm.propTypes = {
  navAfter: PropTypes.string,
}

export default SignUpForm;
