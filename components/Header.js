import Link from 'next/link'
import {SearchBox} from 'react-instantsearch/dom'
import Cart from './Cart'

const Header = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link href="/">
        <a className="navbar-item">
          <img src="/static/assets/logo.png" alt="American Shave Logo" />
        </a>
      </Link>
    </div>
    <SearchBox />
    <button className="button navbar-burger"><span/><span/><span/></button>
    <div className="navbar-menu">
      <div className="navbar-end">
        <Cart />
      </div>
    </div>
  </nav>
)

export default Header;
