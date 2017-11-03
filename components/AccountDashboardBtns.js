import Link from 'next/link'
import OrdersList from './OrdersList'

const Account = () => (
  <div>
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
        <Link href="/payment-methods">
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
        <Link href="/payment-methods">
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
        <Link href="/payment-methods">
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
    <style jsx>{`
      .card-img {
        width: 45px;
        float: left;
        margin-right: 10px;
      }
      .card p, .card h3 {
        color: #084e6c;
      }
      .card:hover p, .card:hover h3 {
        color: #151515;
      }
      .card:hover #brotherhoodSvg {
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
