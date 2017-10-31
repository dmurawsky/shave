import Layout from '../components/Layout'
import ProductPage from '../components/ProductPage'
import withRedux from 'next-redux-wrapper'
import {initStore} from '../store'

const clientCreds = require('../store/clientCreds.json')

const Product = ({url, product}) => (
  <Layout path={url.pathname} index="PRODUCTS">
    <ProductPage product={product} />
  </Layout>
)

Product.getInitialProps = async ({req, query}) => {
  const {initializeApp, apps, database} = require('firebase')
  if (apps.length === 0) {
    initializeApp(clientCreds)
  }
  let id
  if (process.browser) {
    id = query.id
  } else {
    id = req.query.id
  }
  const snap = await database().ref('products/' + id).once('value')
  const product = snap.val()
  return { product }
}

export default withRedux(initStore)(Product)
