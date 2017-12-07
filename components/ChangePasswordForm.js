import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { auth, database } from 'firebase'

class ChangePasswordForm extends React.Component {
  constructor(props, context) {
    super(props, context)
    this._sumbit = this._sumbit.bind(this)
    this._onChange = this._onChange.bind(this)
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    }
  }

  _sumbit(e) {
    e.preventDefault()
    const { newPassword, confirmPassword } = this.state
    if (newPassword !== confirmPassword) {
      this.setState(() => ({ error: 'Passwords do not match' }))
    }
    const user = auth().currentUser
    return user.updatePassword(newPassword).catch(err => {
      this.setState(() => ({ error: err.message }))
      throw err
    })
  }

  _onChange(e) {
    const { name, value } = e.target
    this.setState(s => ({ [name]: value }))
  }

  render() {
    const { currentPassword, newPassword, confirmPassword } = this.state
    return (
      <form onSubmit={this._sumbit} id="changePasswordForm">
        <p className="error-text">{this.state.error}</p>
        <div className="field">
          <label className="label">New Password</label>
          <div className="control">
            <input
              name="newPassword"
              type="password"
              placeholder="New Password"
              className="input"
              value={newPassword}
              onChange={this._onChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Confirm New Password</label>
          <div className="control">
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm New Password"
              className="input"
              value={confirmPassword}
              onChange={this._onChange}
            />
          </div>
        </div>
        <button id="submitBtn" type="submit" className="button">
          Update
        </button>
        <style jsx>{`
          #changePasswordForm {
            max-width: 100%;
            width: 400px;
            margin: 30px auto;
          }
        `}</style>
      </form>
    )
  }
}

export default ChangePasswordForm
