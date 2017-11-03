import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import {auth, database} from 'firebase'
import {connect} from 'react-redux'


class Addresses extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.componentDidMount = this.componentDidMount.bind(this)
    this._on = this._on.bind(this)
    this.state = {
      addresses: {},
    }
  }

  componentDidMount () {
    this._on()
  }

  componentWillUnmount () {
    database().ref('users/' + auth().currentUser.uid + '/account/addresses').off('value')
  }

  _on () {
    if (auth().currentUser) {
      database().ref('users/' + auth().currentUser.uid + '/account/addresses')
        .on('value', snap => {
          const addresses = snap.val()
          if (addresses) {
            this.setState(()=>({addresses}))
          } else {
            this.setState(()=>({addresses: {}}))
          }
        })
    } else {
      setTimeout(this._on, 1500)
    }
  }

  _removeAddress (id) {
    database().ref('users/' + auth().currentUser.uid + '/account/addresses/' + id).remove()
  }

  _selectAddress (id) {
    database().ref('users/' + auth().currentUser.uid + '/profile/' + this.props.addressType).set(id)
  }

  render () {
    const {addresses} = this.state
    return (
      <div id="addresses">
        <table className="table">
          <tbody>
            {Object.keys(addresses).map(key=>(
              <tr
                key={key}
                onClick={this._selectAddress.bind(this, key)}
                className={this.props.profile[this.props.addressType]===key?'selected':''}
              >
                <td>{addresses[key].addressName?addresses[key].addressName:'Unnamed Address'}</td>
                <td>
                  {addresses[key].address1} {addresses[key].address2} {addresses[key].city}, {addresses[key].state} {addresses[key].zip}
                </td>
                <td className="has-text-right">
                  <a onClick={this._removeAddress.bind(this, key)}>Remove</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <style jsx>{`
          .table td {
            font-size: 15px;
            cursor: pointer;
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


Addresses.propTypes = {
  addressType: PropTypes.string,
  profile: PropTypes.object,
}

export default connect(s => ({
  profile: s.profile,
}))(Addresses);
