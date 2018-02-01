import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import { auth, database } from 'firebase'
import { connect } from 'react-redux'

class SignUpPage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this._sumbit = this._sumbit.bind(this)
    this._onChange = this._onChange.bind(this)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      reenterPassword: '',
      error: '',
    }
  }

  async _sumbit(e) {
    e.preventDefault()
    this.setState(() => ({ error: '' }))
    if (this.state.password !== this.state.reenterPassword) {
      return this.setState(() => ({ error: 'Passwords do not match' }))
    }
    try {
      const credential = auth.EmailAuthProvider.credential(
        this.state.email,
        this.state.password,
      )
      const user = await auth().currentUser.linkWithCredential(credential)
      const { firstName, lastName, email } = this.state
      await database()
        .ref('users/' + user.uid + '/profile')
        .update({
          firstName,
          lastName,
          email,
        })
    } catch (err) {
      if (err.code === 'auth/provider-already-linked') {
        this.setState(() => ({
          error:
            'An account is already created for that user. Please sign in or use email/account.',
        }))
      } else {
        this.setState(() => ({ error: err.message }))
      }
      throw err
    }
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
      <div className="center-table">
        <div className="center-cell">
          <Link href="/">
            <div id="authLogo">
              <img src="/static/assets/logo.png" />
            </div>
          </Link>
          <div className="card" id="signUpPage">
            <div className="card-content">
              <form onSubmit={this._sumbit}>
                <p className="error-text">{this.state.error}</p>
                <div className="field">
                  <label className="label">First Name</label>
                  <div className="control">
                    <input
                      name="firstName"
                      type="text"
                      className="input"
                      value={this.state.firstName}
                      onChange={this._onChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Last Name</label>
                  <div className="control">
                    <input
                      name="lastName"
                      type="text"
                      className="input"
                      value={this.state.lastName}
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
                      type="password"
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
                      type="password"
                      className="input"
                      value={this.state.reenterPassword}
                      onChange={this._onChange}
                    />
                  </div>
                </div>
                <button
                  id="submitBtn"
                  type="submit"
                  className="button is-primary">
                  Sign Up
                </button>
              </form>
              <br />
              <br />
              <br />
              <p>
                Already have an account?{' '}
                <Link href="/sign-in">
                  <a>Sign In ►</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <style jsx>{`
          #submitBtn {
            width: 100%;
          }
          #signUpPage {
            text-align: left;
            width: 420px;
            max-width: 100%;
            margin: 0 auto;
          }
        `}</style>
      </div>
    )
  }
}

SignUpPage.propTypes = {
  navAfter: PropTypes.string,
  profile: PropTypes.object,
}

export default connect(s => ({
  profile: s.profile,
}))(SignUpPage)
