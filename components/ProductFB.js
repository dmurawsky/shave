import Link from 'next/link'
import PropTypes from 'prop-types'
import {increment,decrement} from '../utils/cartFunctions'
import {connect} from 'react-redux'

const ProductFB = ({fbKey, product, qty}) => (
  <div className="product">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={'/static/assets/products/prod2.jpg'} alt="product image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content" style={{height: 40}}>
          <Link href={'/product?id=' + fbKey}>
            <strong>
              <a>{product.name}</a>
            </strong>
          </Link>
        </div>
      </div>
      <footer className="card-footer">
        <a onClick={decrement.bind(this, fbKey)} className="inc-dec card-footer-item">
          <i className="fa fa-minus" aria-hidden="true"/>
        </a>
        <a className="prod-count card-footer-item">{qty?qty:0}</a>
        <a onClick={increment.bind(this, fbKey)} className="inc-dec card-footer-item">
          <i className="fa fa-plus" aria-hidden="true"/>
        </a>
      </footer>
    </div>
  </div>
)

ProductFB.propTypes = {
  product: PropTypes.object.isRequired,
  qty: PropTypes.number,
}

export default connect((s,{fbKey}) => ({
  qty: s.cart.items[fbKey],
}), null)(ProductFB)
