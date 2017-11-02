import PropTypes from 'prop-types'
import Link from 'next/link'
import {connect} from 'react-redux'
import formatPrice from '../utils/formatPrice'
import AddToCart from './AddToCart'

const ProductPage = ({product, brand, productId, qty}) => (
  <div id="productPage" className="container page">
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><Link href={'/results'}><a>Products</a></Link></li>
        <li><Link href={'/brand?id='+product.brand}><a>{brand.name}</a></Link></li>
        <li className="is-active"><a href="#" aria-current="page">{product.name}</a></li>
      </ul>
    </nav>
    <div className="content">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{formatPrice(product.price)}</p>
      <AddToCart qty={qty} productId={productId} />
    </div>
    <style jsx>{`
      #productPage {

      }
    `}</style>
  </div>
)

ProductPage.propTypes = {
  product: PropTypes.object,
  productId: PropTypes.string.isRequired,
  brand: PropTypes.object.isRequired,
  qty: PropTypes.number,
}

export default connect((s,{product, brand, productId}) => ({
  product: (product?product:s.products[productId]),
  brand: (brand?brand:s.brands[s.products[productId].brand]),
  qty: s.cart.items[productId],
}))(ProductPage)
