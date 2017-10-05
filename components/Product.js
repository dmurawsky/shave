import Link from 'next/link'
import PropTypes from 'prop-types'
import {Highlight} from 'react-instantsearch/dom'

const Product = ({hit, increment, decrement, inCart}) => (
  <div className="product">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={'/static/assets/products/prod'+(Math.floor(Math.random() * 3) + 1)+'.jpg'} alt="product image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content" style={{height: 40}}>
          <Link href={'/product?id='+hit.id}>
            <strong>
              <a><Highlight attributeName="name" hit={hit} /></a>
            </strong>
          </Link>
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="inc-dec card-footer-item"><i className="fa fa-minus" aria-hidden="true"></i></a>
        <a className="prod-count card-footer-item">0</a>
        <a href="#" className="inc-dec card-footer-item"><i className="fa fa-plus" aria-hidden="true"></i></a>
      </footer>
    </div>
  </div>
)

Product.propTypes = {
  hit: PropTypes.object.isRequired,
  // increment: PropTypes.func.isRequired,
  // decrement: PropTypes.func.isRequired,
}

export default Product;
