import withData from '../store/withData'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import ProductPage from '../components/ProductPage'

export default withData(({url}) => {
  return (
    <Layout path={url.pathname} index="PRODUCTS">
      <ProductPage id={url.query.id} />
    </Layout>
  )
})
