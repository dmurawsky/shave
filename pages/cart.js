import withData from '../store/withData'
import Layout from '../components/Layout'
import CartPage from '../components/CartPage'

export default withData(({url}) => {
  return (
    <Layout path={url.pathname} index="PRODUCTS">
      <CartPage />
    </Layout>
  )
})
