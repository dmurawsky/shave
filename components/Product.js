import Link from 'next/link'
import PropTypes from 'prop-types'
import {increment,decrement} from '../utils/cartFunctions'
import {connect} from 'react-redux'
import formatPrice from '../utils/formatPrice'

const Product = ({hit, qty}) => (
  <div className="product">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={'/static/assets/products/prod3.jpg'} alt="product image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content" style={{height: 40}}>
          <Link href={'/product?id=' + hit.firebaseKey}>
            <div style={{cursor: 'pointer'}}>
              <strong>{hit.title} - {formatPrice(hit.price)}</strong>
            </div>
          </Link>
        </div>
      </div>
      {qty?(
        <footer className="card-footer">
          <a onClick={decrement.bind(this, hit.firebaseKey)} className="inc-dec card-footer-item">
            <i className="fa fa-minus" aria-hidden="true"/>
          </a>
          <a className="prod-count card-footer-item">{qty}</a>
          <a onClick={increment.bind(this, hit.firebaseKey)} className="inc-dec card-footer-item">
            <i className="fa fa-plus" aria-hidden="true"/>
          </a>
        </footer>
      ):(
        <footer className="card-footer">
          <a onClick={increment.bind(this, hit.firebaseKey)} className="card-footer-item">Add to Cart</a>
        </footer>
      )}
    </div>
  </div>
)

Product.propTypes = {
  hit: PropTypes.object.isRequired,
  qty: PropTypes.number,
}

export default connect((s,{hit}) => ({
  qty: s.cart.items[hit.firebaseKey],
}), null)(Product)
