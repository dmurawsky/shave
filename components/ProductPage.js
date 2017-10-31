import PropTypes from 'prop-types'
import {connect} from 'react-redux'


const ProductPage = ({productId}) => (
  <div id="productPage" className="container page">
    <div className="content">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
    <style jsx>{`
      #productPage {

      }
    `}</style>
  </div>
)

ProductPage.propTypes = {
  product: PropTypes.object.isRequired,
  productId: PropTypes.string.isRequired,
}

export default connect((s,{productId}) => ({
  product: s.products[productId],
}))(ProductPage)
