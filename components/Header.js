import React from 'react'
import Link from 'next/link'
import {SearchBox} from 'react-instantsearch/dom'
import Cart from './Cart'
import {connect} from 'react-redux'
import {auth} from 'firebase'

class Header extends React.Component {
  constructor (props, context) {
    super(props, context)
    this._onChange = this._onChange.bind(this)
    this._select = this._select.bind(this)
    this._signOut = this._signOut.bind(this)
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

  _signOut (e) {
    e.preventDefault()
    auth().signOut()
  }

  render () {
    return (
      <div>
        <nav id="superNav" className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-menu" id="superNavLeft">
            <a className="navbar-item supernav-tab">Today's Deals</a>
            <a className="navbar-item supernav-tab">Find a Store</a>
            <a className="navbar-item supernav-tab">Barber Shop</a>
            <a className="navbar-item supernav-tab">Customer Service</a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              {this.props.profile === null && (
                <Link href="/sign-up">
                  <a id="signUpBtn" className="navbar-item" style={{marginRight: 141}}>Sign In | Register</a>
                </Link>
              )}
              {this.props.profile !== null && (
                <Link href="/account">
                  <a id="hey" className="navbar-item" style={{marginRight: 141}}>Hey {this.props.profile.firstName}</a>
                </Link>
              )}
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
            <div id="searchInput" className="control">
              <SearchBox translations={{placeholder:''}} />
            </div>
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
                <a className="navbar-item">Best Sellers</a>
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
                <div className="navbar-dropdown is-boxed is-right">
                  <Link href="/account"><a className="navbar-item">Your Account</a></Link>
                  <Link href="/orders"><a className="navbar-item">Your Orders</a></Link>
                  <Link href="/saved-items"><a className="navbar-item">Your Saved Items</a></Link>
                  <div className="navbar-divider" />
                  <Link href="/brotherhood-rewards"><a className="navbar-item">Brotherhood Rewards</a></Link>
                  <Link href="/account-services"><a className="navbar-item">Account Services</a></Link>
                  <Link href="/replenishment-services"><a className="navbar-item">Replenishment Service</a></Link>
                  <Link href="/box-delivery-service"><a className="navbar-item">Box Delivery Service</a></Link>
                  <Link href="/eductation-center"><a className="navbar-item">Education Center</a></Link>
                  <Link href="/mailer"><a className="navbar-item">American Shave Mailer</a></Link>
                  <Link href="/notification-settings"><a className="navbar-item">Notification Settings</a></Link>
                  <div className="navbar-divider" />
                  <a id="signOut" className="navbar-item" onClick={this._signOut}>Sign Out</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <style jsx>{`
          .supernav-tab {
            -webkit-box-shadow: -5px 0 6px -2px rgba(0,0,0,0.5);
            -moz-box-shadow: -5px 0 6px -2px rgba(0,0,0,0.5);
            box-shadow: -5px 0 6px -2px rgba(0,0,0,0.5);
            border: 0px solid #000000;
            -webkit-transition: padding 0.2s ease, margin 0.2s ease;
            -moz-transition: padding 0.2s ease, margin 0.2s ease;
            -o-transition: padding 0.2s ease, margin 0.2s ease;
            -ms-transition: padding 0.2s ease, margin 0.2s ease;
            transition: padding 0.2s ease, margin 0.2s ease;
          }
        `}</style>
      </div>
    )
  }
}


export default connect(s => ({
  profile: s.profile,
}))(Header);
