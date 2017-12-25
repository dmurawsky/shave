import Layout from '../../layouts/HomeLayout'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../../store'
import PaymentPage from '../../components/cart/PaymentPage'

const CartPayment = ({ url }) => (
  <Layout
    path={url.pathname}
    index="PRODUCTS"
    title="User Info | American Shave">
    <PaymentPage />
  </Layout>
)

export default withRedux(initStore)(CartPayment)
