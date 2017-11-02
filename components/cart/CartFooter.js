import PropTypes from 'prop-types'
import Link from 'next/link'
import formatPrice from '../../utils/formatPrice'


const CartFooter = ({subtotal}) => (
  <div className="box is-pulled-right">
    <table className="table is-striped">
      <tbody>
        <tr>
          <th className="is-size-6 is-uppercase">Subtotal:</th>
          <td className="is-size-6 has-text-right">{formatPrice(subtotal)}</td>
        </tr>
        <tr>
          <th className="is-size-6 is-uppercase">Tax:</th>
          <td className="is-size-6 has-text-right">{formatPrice(subtotal*0.07)}</td>
        </tr>
        <tr>
          <th className="is-size-5 is-uppercase">Total:</th>
          <td className="is-size-5 has-text-right">{formatPrice(subtotal+(subtotal*0.07))}</td>
        </tr>
      </tbody>
    </table>
    <Link href="/cart/user-info"><a className="button primary">Checkout</a></Link>
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

CartFooter.propTypes = {
  subtotal: PropTypes.number.isRequired,
  profile: PropTypes.bool,
}

export default CartFooter
