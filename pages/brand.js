import Layout from '../layouts/HomeLayout'
import BrandPage from '../components/BrandPage'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const Brand = ({ url, products, brand }) => (
  <Layout path={url.pathname} index="PRODUCTS">
    <BrandPage products={products} brand={brand} brandId={url.query.id} />
  </Layout>
)

Brand.getInitialProps = async ({ req, query }) => {
  if (!process.browser) {
    const { initializeApp, apps, database } = require('firebase')
    if (apps.length === 0) {
      const clientCreds = require('../store/clientCreds.json')
      initializeApp(clientCreds)
    }
    const snap = await database()
      .ref('public/brands/' + query.id)
      .once('value')
    const brand = snap.val()
    const productsSnap = await database()
      .ref('public/products')
      .orderByChild('brand')
      .equalTo(query.id)
      .once('value')
    const products = productsSnap.val()
    return { products, brand }
  }
  return {}
}

export default withRedux(initStore)(Brand)
