import Link from 'next/link'
import RecentOrders from './RecentOrders'

const Account = () => (
  <div id="accountPage" className="content page">
    <nav className="columns">
      <div className="column">
        <Link href="/orders">
          <div className="card">
            <div className="card-content">
              <img className="card-img" src="/static/assets/orders.svg" />
              <div>
                <h3>Your Orders</h3>
                <p>Description</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="column">
        <Link href="/security">
          <div className="card">
            <div className="card-content">
              <img className="card-img" src="/static/assets/security.svg" />
              <div>
                <h3>Login & Security</h3>
                <p>Description</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="column">
        <Link href="/addresses">
          <div className="card">
            <div className="card-content">
              <img className="card-img" src="/static/assets/addresses.svg" />
              <div>
                <h3>Your Addresses</h3>
                <p>Description</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </nav>
    <nav className="columns">
      <div className="column">
        <Link href="/payment-options">
          <div className="card">
            <div className="card-content">
              <img className="card-img" src="/static/assets/wallet.svg" />
              <div>
                <h3>Gift Cards</h3>
                <p>Description</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="column">
        <Link href="/payment-options">
          <div className="card">
            <div className="card-content">
              <img className="card-img" src="/static/assets/wallet.svg" />
              <div>
                <h3>Payment Options</h3>
                <p>Description</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="column">
        <Link href="/payment-options">
          <div className="card">
            <div className="card-content">
              <img className="card-img" src="/static/assets/brotherhood.svg" />
              <div>
                <h3>Brotherhood</h3>
                <p>Description</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </nav>
    <RecentOrders />
    <style jsx>{`
      .card-img {
        width: 45px;
        float: left;
        margin-right: 10px;
      }
      #accountPage .card p, #accountPage .card h3 {
        color: #084e6c;
      }
      #accountPage .card:hover p, #accountPage .card:hover h3 {
        color: #151515;
      }
      #accountPage .card:hover #brotherhoodSvg {
        fill: #151515;
      }
      .card {
        cursor: pointer;
        width: 100%;
      }
    `}</style>
  </div>
)

export default Account;
