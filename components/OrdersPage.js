import Link from 'next/link'
import Order from './Order'
import orders from '../scripts/orders'

const OrdersPage = () => (
  <div id="ordersPage" className="content page">
    <h1>Your Orders</h1>
    {orders.map((order, i)=>(<Order key={'order'+i} order={order} />))}
  </div>
)

export default OrdersPage;
