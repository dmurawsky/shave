import Link from 'next/link'

const Order = ({order}) => (
  <div className="panel">
    <div className="panel-heading">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <div>
              <p className="heading">Order Placed</p>
              <p className="subheading">{order.createdAt}</p>
            </div>
          </div>
          <div className="level-item">
            <div>
              <p className="heading">Total</p>
              <p className="subheading">{order.total}</p>
            </div>
          </div>
          <div className="level-item">
            <div>
              <p className="heading">Ship to:</p>
              <p className="subheading">{order.address.name}</p>
            </div>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <div>
              <p className="heading">Order ID: {order.id}</p>
              <p className="subheading">
                <Link href="/account"><a>Order Details</a></Link> | <Link href="/account"><a>Invoice</a></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {order.purchases.map((purchase, i)=>(
      <div key={order.id+i} className="panel-block">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <img className="purchase-img" src={purchase.product.photo} />
            </div>
            <div className="level-item">
              <div>
                <h3><Link href="/account"><a>{purchase.product.name}</a></Link></h3>
                <p>{'$'+purchase.product.price}</p>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div>
              <Link href="/account"><a className="button primary">Buy It Again</a></Link>
              <Link href="/account"><a className="button">Return Item</a></Link>
              <Link href="/account"><a className="button">Write a Review</a></Link>
            </div>
          </div>
        </div>
      </div>
    ))}
    <style jsx>{`
      .level {
        width: 100%;
      }
      .subheading {
        font-size: 15px;
        font-family: Arial, sans-serif;
      }
      .level-item {
        margin: 0 15px;
      }
      img.purchase-img {
        width: 120px;
      }
      .level-right {
        width: 200px;
      }
      .level-right .button {
        width: 200px;
        margin-bottom: 10px;
      }
      .button.primary {
        background: #084e6c;
        color: white;
      }
    `}</style>
  </div>
)

export default Order;
