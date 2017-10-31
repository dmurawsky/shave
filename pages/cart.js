import Layout from '../components/Layout'
import CartPage from '../components/CartPage'

export default ({pathname}) => (
  <Layout path={pathname} index="PRODUCTS">
    <CartPage />
  </Layout>
)
