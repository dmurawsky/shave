import React from 'react'
import Link from 'next/link'
import {SearchBox} from 'react-instantsearch/dom'
import Cart from './Cart'

class Header extends React.Component {
  constructor (props, context) {
    super(props, context)
    this._onChange = this._onChange.bind(this)
    this._select = this._select.bind(this)
    this.state = { category: 'All' }
  }

  _onChange (e) {
    const target = e.target
    console.log(target)
    this.setState(()=>({ category: target.value }))
  }

  _select () {
    window.ExpandSelect(this.select)
  }

  render () {
    return (
      <div>
        <nav id="superNav" className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-menu" id="superNavLeft">
            <a className="navbar-item">Today's Deals</a>
            <a className="navbar-item">Find a Store</a>
            <a className="navbar-item">Barber Shop</a>
            <a className="navbar-item">Customer Service</a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item" style={{marginRight: 141}}>Sign In | Register</a>
              <Cart />
            </div>
          </div>
        </nav>
        <nav id="mainNav" className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link href="/">
              <a id="logo">
                <img src="/static/assets/logo.png" alt="American Shave Logo" />
              </a>
            </Link>
          </div>
          <div id="search" className="field has-addons">
            <p className="control" onClick={this._select} style={{cursor: 'pointer'}}>
              <a id="searchSelectFacade" className="button is-static">{this.state.category}</a>
            </p>
            <p className="control">
              <span id="searchSelect" className="select">
                <select ref={(select) => this.select = select} onChange={this._onChange}>
                  <option>All</option>
                  <option>Shave Care</option>
                  <option>Hair Care</option>
                  <option>Beard Care</option>
                  <option>Nail Care</option>
                  <option>Skin Care</option>
                  <option>Shave Hardware</option>
                  <option>Electric Hardware</option>
                  <option>Maintenance</option>
                  <option>Accessories</option>
                  <option>Blade Refills</option>
                  <option>Leather Goods</option>
                </select>
              </span>
            </p>
            <p id="searchInput" className="control">
              <input className="input" type="text" />
            </p>
            <p className="control">
              <a id="searchBtn" className="button">
                <img src="/static/assets/search.svg" />
              </a>
            </p>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <span id="brandHeaderAd">Advertisement</span>
            </div>
          </div>
        </nav>
        <nav id="subNav" className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-menu">
            <div id="categoriesNav" className="sub-nav-dropdown navbar-item has-dropdown is-hoverable">
              <a className="navbar-link is-active">Categories</a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item">Shave Care</a>
                <a className="navbar-item">Hair Care</a>
                <a className="navbar-item">Beard Care</a>
                <a className="navbar-item">Nail Care</a>
                <a className="navbar-item">Skin Care</a>
                <a className="navbar-item">Shave Hardware</a>
                <a className="navbar-item">Electric Hardware</a>
                <a className="navbar-item">Maintenance</a>
                <a className="navbar-item">Accessories</a>
                <a className="navbar-item">Blade Refills</a>
                <a className="navbar-item">Leather Goods</a>
              </div>
            </div>
            <a className="navbar-item"><span>SHAVE CARE</span></a>
            <a className="navbar-item"><span>SHAVING BRUSH</span></a>
            <a className="navbar-item"><span>RAZORS</span></a>
            <a className="navbar-item"><span>GROOMING</span></a>
            <a className="navbar-item"><span>HARDWARE</span></a>
            <a className="navbar-item"><span>TRAVEL</span></a>
            <a className="navbar-item"><span>GIFT IDEAS</span></a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div id="accountNav" className="sub-nav-dropdown navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-active">My Account</a>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item">Your Account</a>
                  <a className="navbar-item">Your Orders</a>
                  <a className="navbar-item">Your Saved Items</a>
                  <div className="navbar-divider" />
                  <a className="navbar-item">Brotherhood Rewards</a>
                  <a className="navbar-item">Account Services</a>
                  <a className="navbar-item">Replenishment Service</a>
                  <a className="navbar-item">Box Delivery Service</a>
                  <a className="navbar-item">Education Center</a>
                  <a className="navbar-item">American Shave Mailer</a>
                  <a className="navbar-item">Notification Settings</a>
                  <div className="navbar-divider" />
                  <a className="navbar-item">Sign Out</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}


// <div className="navbar-item has-dropdown is-hoverable">
//   <a className="navbar-link is-active" style={{padding:0}}>Professional</a>
//   <div className="navbar-dropdown is-boxed">
//     <a className="navbar-item">Shave Care</a>
//     <a className="navbar-item">Hair Care</a>
//     <a className="navbar-item">Beard Care</a>
//     <a className="navbar-item">Nail Care</a>
//     <a className="navbar-item">Skin Care</a>
//     <a className="navbar-item">Shave Hardware</a>
//     <a className="navbar-item">Electric Hardware</a>
//     <a className="navbar-item">Maintenance</a>
//     <a className="navbar-item">Accessories</a>
//     <a className="navbar-item">Blade Refills</a>
//     <a className="navbar-item">Leather Goods</a>
//   </div>
// </div>


export default Header;
