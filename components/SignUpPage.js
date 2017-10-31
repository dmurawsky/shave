import React from 'react'
import Link from 'next/link'
import {auth, database} from 'firebase'

const inputs = [
  { name: 'firstName', placeholder: 'First Name', type: 'text' },
  { name: 'lastName', placeholder: 'Last Name', type: 'text' },
  { name: 'email', placeholder: 'Email', type: 'email' },
  { name: 'confirmEmail', placeholder: 'Confirm Email', type: 'email' },
  { name: 'password', placeholder: 'Password', type: 'password' },
  { name: 'confirmPassword', placeholder: 'Confirm Password', type: 'password' },
]

class SignUpPage extends React.Component {
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
      error: ''
    }
  }

  _sumbit (e) {
    e.preventDefault()
    if (auth().currentUser) {
      auth().signOut()
    }
    auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        const {firstName, lastName, email} = this.state
        return database().ref('users/' + user.uid + '/profile').update({firstName, lastName, email});
      })
      .then(() => {
        return auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      })
      .then(() => {
        window.location.pathname = '/'
      })
      .catch(err => {
        this.setState({ error: err.message });
        throw err;
      });
  }

  _onChange (e) {
    const {name, value} = e.target
    this.setState(s=>({[name]:value}))
  }

  render () {
    return (
      <div id="signUpPage" className="content page">
        <h1>Sign Up</h1>
        <form onSubmit={this._sumbit} id="signUpForm">
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
          <button id="submitBtn" type="submit" className="button">Submit</button>
        </form>
      </div>
    )
  }
}

export default SignUpPage;
