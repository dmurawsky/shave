import withData from '../store/withData'
import Layout from '../components/Layout'
import OrdersPage from '../components/OrdersPage'

export default withData(({url}) => {
  return (
    <Layout path={url.pathname} index="PRODUCTS">
      <OrdersPage />
    </Layout>
  )
})
