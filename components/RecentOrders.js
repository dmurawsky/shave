import Order from './Order'
import orders from '../scripts/orders'

const RecentOrders = () => (
  <div id="recentOrders">
    <h1>Recent Orders</h1>
    {orders.filter((o,i)=>i===0).map((order, i)=>(<Order key={'order'+i} order={order} />))}
    <style jsx>{`
      #recentOrders {
        width: 900px;
        padding-bottom: 30px;
        margin: 10px auto;
      }
    `}</style>
  </div>
)

export default RecentOrders;
