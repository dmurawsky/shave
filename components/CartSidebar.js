import Link from 'next/link'

const CartSidebar = () => (
  <div className="panel">
    <div className="panel-heading">
      <p className="heading">Subtotal: $67.89</p>
      <Link href="/checkot"><a className="button primary">Prodceed to Checkout</a></Link>
    </div>
    <div className="panel-block">
    </div>
    <style jsx>{`
      .button.primary {
        margin-bottom: 10px;
        width: 200px;
        background: #084e6c;
        color: white;
      }
    `}</style>
  </div>
)

export default CartSidebar;
