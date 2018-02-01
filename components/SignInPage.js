import React from 'react'
import Link from 'next/link'
import { auth, database } from 'firebase'

const inputs = [
  { name: 'email', placeholder: 'Email', type: 'email' },
  { name: 'password', placeholder: 'Password', type: 'password' },
]

class SignInPage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this._sumbit = this._sumbit.bind(this)
    this._onChange = this._onChange.bind(this)
    this.state = {
      email: '',
      password: '',
      error: '',
    }
  }

  _sumbit(e) {
    e.preventDefault()
    const { email, password } = this.state
    auth()
      .signOut()
      .then(() => auth().signInWithEmailAndPassword(email, password))
      .then(() => {
        window.location.pathname = '/'
      })
      .catch(err => {
        this.setState({ error: err.message })
        throw err
      })
  }

  _onChange(e) {
    const { name, value } = e.target
    this.setState(s => ({ [name]: value }))
  }

  render() {
    return (
      <div className="center-table">
        <div className="center-cell">
          <Link href="/">
            <div id="authLogo">
              <img src="/static/assets/logo.png" />
            </div>
          </Link>
          <div className="card" id="signInPage">
            <div className="card-content">
              <form onSubmit={this._sumbit} id="signInForm">
                <p>{this.state.error}</p>
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
                <button
                  type="submit"
                  className="button is-primary is-full-width">
                  Sign In
                </button>
              </form>
              <hr />
              <p className="has-text-centered">New to American Shave?</p>
              <br />
              <Link href="/sign-up">
                <button className="button is-full-width">
                  Create your American Shave Account
                </button>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          .is-full-width {
            width: 100%;
          }
          #signInPage {
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

export default SignInPage
