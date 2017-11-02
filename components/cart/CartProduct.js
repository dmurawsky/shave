import Link from 'next/link'
import PropTypes from 'prop-types'
import formatPrice from '../../utils/formatPrice'
import {removeFromCart} from '../../utils/cartFunctions'
import AddToCart from '../AddToCart'


const CartProduct = ({product, qty, productId}) => (
  <div>
    <div className="level">
      <div className="level-left">
        <div className="level-item">
          <img src={'/static/assets/products/prod1.jpg'} />
        </div>
        <div className="level-item">
          <div>
            <h2><Link href="/saved-items"><a>{product.name}</a></Link></h2>
            <p>{formatPrice(product.price)}</p>
          </div>
        </div>
      </div>
      <div className="level-right">
        <div className="has-text-right">
          <AddToCart qty={qty} productId={productId} />
          <a onClick={removeFromCart.bind(this, productId)}>Remove</a>
        </div>
      </div>
    </div>
    <style jsx>{`
      .level {
        width: 100%;
        padding: 20px 0px;
        border-top: solid 1px #ccc;
      }
      .level-item {
        margin: 0 15px;
      }
      img {
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

CartProduct.propTypes = {
  productId: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired,
  qty: PropTypes.number.isRequired,
}

export default CartProduct;
