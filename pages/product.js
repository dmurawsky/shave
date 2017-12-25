import Layout from '../layouts/HomeLayout'
import ProductPage from '../components/ProductPage'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const Product = ({ url, product, brand }) => (
  <Layout path={url.pathname} index="PRODUCTS">
    <ProductPage product={product} brand={brand} productId={url.query.id} />
  </Layout>
)

Product.getInitialProps = async ({ req, query }) => {
  if (!process.browser) {
    const { initializeApp, apps, database } = require('firebase')
    if (apps.length === 0) {
      const clientCreds = require('../store/clientCreds.json')
      initializeApp(clientCreds)
    }
    const snap = await database()
      .ref('public/products/' + query.id)
      .once('value')
    const product = snap.val()
    const brandSnap = await database()
      .ref('public/brands/' + product.brand)
      .once('value')
    const brand = brandSnap.val()
    return { product, brand }
  }
  return {}
}

export default withRedux(initStore)(Product)
