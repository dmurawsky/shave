import Layout from '../../components/Layout'
import CartPage from '../../components/cart/CartPage'
import withRedux from 'next-redux-wrapper'
import {initStore} from '../../store'


const Page = ({url}) => (
  <Layout path={url.pathname} index="PRODUCTS">
    <CartPage />
  </Layout>
)

export default withRedux(initStore)(Page)
