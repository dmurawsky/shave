import PropTypes from 'prop-types'
import {increment,decrement} from '../utils/cartFunctions'


const AddToCart = ({productId, qty}) => (!qty ? (
    <a onClick={increment.bind(this, productId)} className="button primary">Add To Cart</a>
  ): (
    <div className="field has-addons">
      <p className="control">
        <a onClick={decrement.bind(this, productId)} className="button">
          <span className="icon">
            <i className="fa fa-minus"></i>
          </span>
        </a>
      </p>
      <p className="control">
        <a className="button">
          <span>{qty}</span>
        </a>
      </p>
      <p className="control">
        <a onClick={increment.bind(this, productId)} className="button">
          <span className="icon">
            <i className="fa fa-plus"></i>
          </span>
        </a>
      </p>
    </div>
  )
)

AddToCart.propTypes = {
  productId: PropTypes.string.isRequired,
  qty: PropTypes.number,
}

export default AddToCart
