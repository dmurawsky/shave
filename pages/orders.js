import Layout from '../components/Layout'
import OrdersPage from '../components/OrdersPage'

export default ({pathname}) => (
  <Layout path={pathname} index="PRODUCTS">
    <OrdersPage />
  </Layout>
)
