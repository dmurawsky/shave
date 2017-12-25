import Layout from '../layouts/HomeLayout'
import AddressesPage from '../components/AddressesPage'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const Page = ({ url }) => (
  <Layout
    path={url.pathname}
    index="PRODUCTS"
    title="Manage Addresses | American Shave">
    <AddressesPage />
  </Layout>
)

export default withRedux(initStore)(Page)
