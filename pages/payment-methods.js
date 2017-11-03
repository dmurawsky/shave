import Layout from '../components/Layout'
import PaymentMethodsPage from '../components/PaymentMethodsPage'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const AccountPage = ({url}) => (
  <Layout path={url.pathname} index="PRODUCTS" title="Manage Payment Methods | American Shave">
    <PaymentMethodsPage />
  </Layout>
)

export default withRedux(initStore)(AccountPage)
