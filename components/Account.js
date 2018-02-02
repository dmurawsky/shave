import Link from 'next/link'
import OrdersList from './OrdersList'
import AccountDashboardBtns from './AccountDashboardBtns'

const Account = () => (
  <div id="accountPage" className="content page">
    <AccountDashboardBtns />
    <h1>Recent Orders</h1>
    <OrdersList />
  </div>
)

export default Account
