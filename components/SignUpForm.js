import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import { auth, database } from 'firebase'
import { connect } from 'react-redux'

class SignUpForm extends React.Component {
  constructor(props, context) {
    super(props, context)
    this._sumbit = this._sumbit.bind(this)
    this._onChange = this._onChange.bind(this)
    this.state = {
      name: '',
      email: '',
      password: '',
      reenterPassword: '',
      error: '',
    }
  }

  _sumbit(e) {
    e.preventDefault()
    this.setState(() => ({ error: '' }))
    if (this.state.password !== this.state.reenterPassword) {
      return this.setState(() => ({ error: 'Passwords do not match' }))
    }
    const credential = auth.EmailAuthProvider.credential(
      this.state.email,
      this.state.password,
    )
    auth()
      .currentUser.linkWithCredential(credential)
      .then(user => {
        const { firstName, lastName, email } = this.state
        return database()
          .ref('users/' + user.uid + '/profile')
          .update({
            firstName,
            lastName,
            email,
          })
      })
      .catch(err => {
        if (err.code === 'auth/provider-already-linked') {
          this.setState(() => ({
            error:
              'An account is already created for that user. Please sign in or use email/account.',
          }))
        } else {
          this.setState(() => ({ error: err.message }))
        }
        throw err
      })
  }

  _onChange(e) {
    const { name, value } = e.target
    this.setState(s => ({ [name]: value }))
  }

  _signOut(e) {
    e.preventDefault()
    auth().signOut()
  }

  render() {
    if (this.props.profile) {
      const { name, email } = this.props.profile
      return (
        <div>
          <h3 className="has-text-centered">You are currently signed in as:</h3>
          <h2 className="has-text-centered">
            {name} {email}
          </h2>
          <button
            style={{
              display: 'block',
              width: '120px',
              margin: '40px auto',
            }}
            className="button is-small"
            onClick={this._signOut}>
            Sign Out
          </button>
        </div>
      )
    }
    return (
      <div>
        <form onSubmit={this._sumbit} id="signUpForm">
          <p className="error-text">{this.state.error}</p>
          <div className="field">
            <label className="label">Your Name</label>
            <div className="control">
              <input
                name="name"
                type="text"
                className="input"
                value={this.state.name}
                onChange={this._onChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                name="email"
                type="text"
                className="input"
                value={this.state.email}
                onChange={this._onChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                name="password"
                type="text"
                className="input"
                value={this.state.password}
                onChange={this._onChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Re-Enter Password</label>
            <div className="control">
              <input
                name="reenterPassword"
                type="text"
                className="input"
                value={this.state.reenterPassword}
                onChange={this._onChange}
              />
            </div>
          </div>
          <button id="submitBtn" type="submit" className="button">
            Sign Up
          </button>
        </form>
        <br />
        <br />
        <br />
        <Link href="/sign-in">
          <a>Sign In</a>
        </Link>
      </div>
    )
  }
}

SignUpForm.propTypes = {
  navAfter: PropTypes.string,
  profile: PropTypes.object,
}

export default connect(s => ({
  profile: s.profile,
}))(SignUpForm)
