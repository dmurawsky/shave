import React from 'react'
import Link from 'next/link'
import {auth, database} from 'firebase'

const inputs = [
  { name: 'email', placeholder: 'Email', type: 'email' },
  { name: 'password', placeholder: 'Password', type: 'password' },
]

class SignInPage extends React.Component {
  constructor (props, context) {
    super(props, context)
    this._sumbit = this._sumbit.bind(this)
    this._onChange = this._onChange.bind(this)
    this.state = {
      email: '',
      password: '',
      error: '',
    }
  }

  _sumbit (e) {
    e.preventDefault()
    const {email,password} = this.state
    auth()signOut()
      .then(() => auth().signInWithEmailAndPassword(email, password))
      .then(() => {
        window.location.pathname = '/'
      })
      .catch(err => {
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
      <div id="signInPage" className="content page">
        <h1>Sign In</h1>
        <form onSubmit={this._sumbit} id="signInForm">
          <p>{this.state.error}</p>
          {inputs.map(({name, type, placeholder}) => (
            <input
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
              className="input"
              value={this.state[name]}
              onChange={this._onChange}
            />
          ))}
          <button id="signInBtn" type="submit" className="button">Sign In</button>
        </form>
      </div>
    )
  }
}

export default SignInPage;
