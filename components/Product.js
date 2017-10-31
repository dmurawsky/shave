import Link from 'next/link'
import PropTypes from 'prop-types'
import {database,auth} from 'firebase'
import {connect} from 'react-redux'


const increment = id => {
  database().ref(`users/${auth().currentUser.uid}/cart/items/${id}`)
    .transaction(qty => (qty?qty+1:1))
}
const decrement = id => {
  database().ref(`users/${auth().currentUser.uid}/cart/items/${id}`)
    .transaction(qty => (qty?qty-1:null))
}

const Product = ({hit, qty}) => (
  <div className="product">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={'/static/assets/products/prod'+(Math.floor(Math.random() * 3) + 1)+'.jpg'} alt="product image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content" style={{height: 40}}>
          <Link href={'/product?id=' + hit.firebaseKey}>
            <strong>
              <a>{hit.title}</a>
            </strong>
          </Link>
        </div>
      </div>
      <footer className="card-footer">
        <a onClick={decrement.bind(this, hit.firebaseKey)} className="inc-dec card-footer-item">
          <i className="fa fa-minus" aria-hidden="true"/>
        </a>
        <a className="prod-count card-footer-item">{qty?qty:0}</a>
        <a onClick={increment.bind(this, hit.firebaseKey)} className="inc-dec card-footer-item">
          <i className="fa fa-plus" aria-hidden="true"/>
        </a>
      </footer>
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
