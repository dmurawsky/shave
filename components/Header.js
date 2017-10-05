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
            <a className="navbar-item">Barber Services</a>
            <a className="navbar-item">Support</a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item" style={{marginRight: 160}}>Sign In | Register</a>
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
                  <option>3 Blade Razor</option>
                  <option>5 Blade Razor</option>
                  <option>After-Shave</option>
                  <option>Blades</option>
                  <option>Electric Shavers</option>
                  <option>Fragrances</option>
                  <option>Razor Stands</option>
                  <option>Safety Razor</option>
                  <option>Shaving Brush</option>
                  <option>Shaving Cream</option>
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
            <div id="categoriesNav" className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link is-active">Categories</a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item">3 Blade Razor</a>
                <a className="navbar-item">5 Blade Razor</a>
                <a className="navbar-item">After-Shave</a>
                <a className="navbar-item">Blades</a>
                <a className="navbar-item">Electric Shavers</a>
                <a className="navbar-item">Fragrances</a>
                <a className="navbar-item">Razor Stands</a>
                <a className="navbar-item">Safety Razor</a>
                <a className="navbar-item">Shaving Brush</a>
                <a className="navbar-item">Shaving Cream</a>
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
        </nav>
      </div>
    )
  }
}


export default Header;
