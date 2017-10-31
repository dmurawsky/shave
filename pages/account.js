import Layout from '../components/Layout'
import Account from '../components/Account'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const AccountPage = ({pathname}) => (
  <Layout path={pathname} index="PRODUCTS" title="Account | American Shave">
    <Account />
  </Layout>
)

export default withRedux(initStore)(AccountPage)
