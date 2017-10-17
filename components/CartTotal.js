import Link from 'next/link'

const CartTotal = () => (
  <div className="cart-total">
    <table className="table is-bordered is-striped is-narrow is-fullwidth">
      <tbody>
        <tr>
          <th>Oct. 7th, 2017</th>
          <td>Oct. 7th, 2017</td>
        </tr>
        <tr>
          <th>Oct. 7th, 2017</th>
          <td>Oct. 8th, 2017</td>
        </tr>
        <tr>
          <th>Oct. 7th, 2017</th>
          <td>Oct. 9th, 2017</td>
        </tr>
        <tr>
          <th>Oct. 7th, 2017</th>
          <td>Oct. 10th, 2017</td>
        </tr>
      </tbody>
    </table>
    <style jsx>{`
      .cart-total {
        margin: 30px;
      }
    `}</style>
  </div>
)

export default CartTotal;
