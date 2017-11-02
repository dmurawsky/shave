import PropTypes from 'prop-types'
import Link from 'next/link'
import {connect} from 'react-redux'
import {increment,decrement} from '../utils/cartFunctions'
import ProductFB from './ProductFB'
const R = require('ramda')


const BrandPage = ({products, brand, brandId}) => (
  <div id="brandPage" className="container page">
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><Link href={'/results'}><a>Products</a></Link></li>
        <li className="is-active"><a href="#" aria-current="page">{brand.name}</a></li>
      </ul>
    </nav>
    <div className="is-clearfix">
      {Object.keys(products).map(key=>(
        <ProductFB key={key} fbKey={key} product={products[key]} />
      ))}
    </div>
    <style jsx>{`
      #brandPage {

      }
    `}</style>
  </div>
)

BrandPage.propTypes = {
  products: PropTypes.object.isRequired,
  brandId: PropTypes.string.isRequired,
  brand: PropTypes.object.isRequired,
}

export default connect((s,{products, brand, brandId}) => ({
  products: (
    products ?
    products :
    R.filter(product=>product.brand===brandId, s.products)
  ),
  brand: (brand?brand:s.brands[brandId]),
}))(BrandPage)
